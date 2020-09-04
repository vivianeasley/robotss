import {html, render} from 'lighterhtml'
import {rssFeedsConfig} from './modules/rss-feeds-config'

const mainNode = document.querySelector(".feeds");
const configNode = document.querySelector(".feed-list");
const addFeedNode = document.querySelector(".add-feed");
const settingsNode = document.querySelector(".settings");
const rss2JsonUrl = "https://api.rss2json.com/v1/api.json";

const maxArticlesInFeed = 500;

const store = {
    setItem: async function (key, value) {
        await Promise.resolve();
    localStorage.setItem(key, value);
    },
    getItem: async function (key) {
        await Promise.resolve();
      return localStorage.getItem(key);
    }
};

window.onload = function() {
  checkAccess();
  async function checkAccess () {
    let dataStr = await store.getItem('data');
    if (!dataStr) {
      dataStr = window.prompt("Access code: ");
      if (dataStr.length > 63 && dataStr.length < 18) {
        if (ga) {
          ga('send', {
              hitType: 'event',
              eventCategory: 'error',
              eventAction: 'signin',
              eventLabel: 'wrong-size'
            });

        }
        return;
      }
      await store.setItem('data', dataStr);
    }

    init(dataStr);
    attachScrollToLogo();
  }
};

async function init (data) {
    const suscribedFeeds = await store.getItem('feedData');
    if (!data) data =  await store.getItem('data');
    let feeds;
    if (!suscribedFeeds) {
        feeds = rssFeedsConfig;
    } else {
      console.log("Got feeds from local")
        feeds = await promisedParseJSON(suscribedFeeds);
    }
    const timeInMill = Date.now();
    const urlsArr = await generateUrlArray(timeInMill, feeds);

    if (urlsArr && urlsArr.length > 0) {
        console.log("Requested new feeds")
        const dataObj = await Promise.all(urlsArr.map(url =>
            fetch(rss2JsonUrl+"?rss_url="+url+"&api_key="+data).then(resp => resp.json())
        )).then(allJson => {
           if (allJson.status === "error" && ga) {
              ga('send', {
                  hitType: 'event',
                  eventCategory: 'error',
                  eventAction: 'request-rss',
                  eventLabel: allJson.message
                });
           }
           return allJson;
        });
        await updateFeeds(dataObj, feeds);
        const feedsStr = await promisedStringifyJSON(feeds);
        await store.setItem('feedData', feedsStr);
    }

      const allFeedItems = await mergeFeeds(feeds);
      const allFeedItemsOrdered = await sortFeedByPubDate(allFeedItems);
      const allFeedItemsOrderedClipped = await allFeedItemsOrdered.slice(0, maxArticlesInFeed);

      renderFeed(allFeedItemsOrderedClipped);
      renderFeedList(feeds, toggleFeeds);
      renderAddFeed(addFeed);
      renderSettings(store, feeds, init);
}

function attachScrollToLogo () {
  document.querySelector(".logo").addEventListener("click", () => {
    window.scrollTo(0, 0);
  },false)
}

function generateId (uri) {
  const identifier = decodeURIComponent(uri);
  return identifier.replace(/[^a-zA-Z ]/g, "")
}

function updateFeeds(newData, oldData) {
    return new Promise((resolve, reject) => {
      for (var i = 0; i < newData.length; i++) {
        const id = generateId(newData[i].feed.url);
        if (oldData[id]) {
          oldData[id] = {...oldData[id], ...newData[i]}
        }
      }
      resolve();
    })
}

function sortFeedByPubDate(json) {
    return new Promise((resolve, reject) => {
        const sortedFeedByPubDate = json.sort((a, b) => ( a.pubDate && b.pubDate ) ? (a.pubDate - b.pubDate) : 0 );
        resolve(sortedFeedByPubDate)
    })
}

function promisedParseJSON(json) {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(json))
        } catch (e) {
            reject(e)
        }
    })
}

function promisedStringifyJSON(json) {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.stringify(json))
        } catch (e) {
            reject(e)
        }
    })
}

function mergeFeeds (data) {
    return new Promise((resolve, reject) => {
      let allItemsArr = [];
      for (let prop in data) {
        if(data[prop].feed && data[prop].feed.title) {
            for (var j = 0; j < data[prop].items.length; j++) {
                data[prop].items[j].siteName = data[prop].feed.title;
            }
        }
        if (data[prop].status === "ok" && data[prop].enabled) {
          allItemsArr = [...allItemsArr, ...data[prop].items]
        }
      }

      const sortedAllItemsArr = allItemsArr.sort((a, b) => {
        let dateObjA = new Date(a.pubDate);
        let dateObjB = new Date(b.pubDate);
        return dateObjB - dateObjA;
      })

      resolve(sortedAllItemsArr)
    })
}

function generateUrlArray (currentDate, feeds) {
  return new Promise((resolve, reject) => {
    const urlArray = [];
    for (let prop in feeds) {
      if (feeds[prop].enabled) {
        if (feeds[prop].lastUpdate === undefined) {
          urlArray.push(feeds[prop].url)
          feeds[prop].lastUpdate = Date.now();
        } else {
          let timeDiff = Math.abs(feeds[prop].lastUpdate - currentDate) / 3600000;
          if (timeDiff > feeds[prop].updateHoursInterval) {
            urlArray.push(feeds[prop].url)
            feeds[prop].lastUpdate = Date.now();
          }
        }
      }
    }
    resolve(urlArray)
  });
};

async function addFeed (name, url, hours) {
  if (!name) {
    window.alert("You need to enter a name for the feed");
    return;
  }

  if (!url) {
    window.alert("You need to enter a URL for the feed");
    return;
  }

  if (!hours) hours = 12;

  const encodedUrl = encodeURIComponent(url);
  const urlId = url.replace(/[^a-zA-Z ]/g, "");

  const newFeedDataObj = {
    name: name,
    url: encodedUrl,
    updateHoursInterval: hours,
    lastUpdate: 0,
    enabled: true
  }

  const storedFeedsString = await store.getItem('feedData');
  const storedFeeds = await promisedParseJSON(storedFeedsString);
  storedFeeds[urlId] = newFeedDataObj;
  const feedsStr = await promisedStringifyJSON(storedFeeds);
  await store.setItem('feedData', feedsStr);
  await init();
}

async function toggleFeeds () {
  const suscribedFeeds = await store.getItem('feedData');
  const parsedSuscribedFeeds = await promisedParseJSON(suscribedFeeds);

  const checkboxNodes = document.querySelectorAll(".feed-checkbox");



  console.log("checkboxes", checkboxNodes)
  for (var i = 0; i < checkboxNodes.length; i++) {

    for (let prop in parsedSuscribedFeeds) {
      if (checkboxNodes[i].getAttribute("id") === prop) {
        if (checkboxNodes[i].checked) parsedSuscribedFeeds[prop].enabled = true;
        if (!checkboxNodes[i].checked) parsedSuscribedFeeds[prop].enabled = false;
        break
      }
    }
  }

  const suscribedFeedsString = await promisedStringifyJSON(parsedSuscribedFeeds);
  await store.setItem('feedData', suscribedFeedsString);
  await init();
}

function renderFeed (data) {
  render(mainNode, () => {
    const mainImg = (textData) => {
      // if (textData.thumbnail) return html.node`<img alt="Site Link" src="${textData.thumbnail}" height="150">`;
      return "";
    }

    const titleText = (textData) => {
      const scrubbed = scrubOutHtml(textData.title);
      return html.node`${{html: scrubbed}}`;
    }
    const mainText = (textData) => {
      if (textData.content) return html.node`
        <details>
          <summary class="article-title">${titleText(textData)}<br><span class="site-name"> ${{html: textData.siteName}}</span></summary>
          ${{html: textData.content}}
          <p><a href=${textData.guid}>Site Link</a> &#8226; <a href=${textData.link}>Article Link</a></p>
        </details>
      `
      if (textData.description) return html.node`
        <details>
          <summary class="article-title">${titleText(textData)}<br><span class="site-name"> ${{html: textData.siteName}}</span></summary>
          ${{html: textData.description}}
          <p><a href=${textData.guid}>Site Link</a> &#8226; <a href=${textData.link}>Article Link</a></p>
        </details>
      `
      return "";
    }

    // if not enabled don't render
    return html.node`
      <div>${data.map(text => html.node`
        <div class="feed-article">
            ${mainImg(text)}
            ${mainText(text)}
        </div>
      `)}
      </div>
    `;
  })
}

function scrubOutHtml (input) {
  let removedTags = input.replace(/&lt;p&gt;/g, "");
  return removedTags.replace(/&lt;\/p&gt;/g, "");
}

function htmlDecode(input){
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes[0].nodeValue;
}


function renderFeedList (data, toggleFeedsFunct) {
  render(configNode, () => {
    const inputNode = (listItem, key) => {
      if (listItem[key]) return html.node`<input class="feed-checkbox" type="checkbox" id=${key} name=${key} value=${key} checked=${listItem[key].enabled}>`;
    }

    return html.node`
      ${Object.keys(data).map((key, index) => {
        return html.node`
          ${inputNode(data, key)}
          <label for=${key}>${data[key].name}</label><br>
      `})}
      <button onclick=${toggle}>Submit</button>
    `;
  })

  function toggle () {
    toggleFeedsFunct()
  }
}

function renderAddFeed (addFeedFunct) {
  let resultNode = render(addFeedNode, () => {
    return html.node`
      RSS Feed Name: <input class="feed-name-input" type="text">
      Feed URL: <input class="feed-url-input" type="text">
      Update Every Hours: <input class="feed-hours-input" type="number">
      <button onclick=${add}>Submit</button>
    `;
  })

  function add () {
    let feedName = resultNode.querySelector(".feed-name-input").value;
    let feedUrl = resultNode.querySelector(".feed-url-input").value;
    let feedHours = resultNode.querySelector(".feed-hours-input").value;
    addFeedFunct(feedName, feedUrl, feedHours);
  }
}

function renderSettings (storeMethodsObj, data, initFunct) {
  const settings = render(settingsNode, () => {
    return html.node`
      <div>
        <h3>Save and Load Data</h3>
        <textarea id="json-backup-data" rows="4" cols="40">
        </textarea>
        <button onclick=${setSiteData}>Get Site Data</button>&nbsp;&nbsp;&nbsp;&nbsp;<button <button onclick=${loadData}>Load Data</button>
      </div>

      <h3>Clear Site Data</h3>
      <button onclick=${clearAllData}>Clear All Data</button>

      <h3>Darkmode</h3>
      <button onclick=${toggleDarkMode}>Toggle Darkmode</button>

    `;
  })

  function toggleDarkMode () {
    document.querySelector("body").classList.toggle("body-darkmode");
    document.querySelector("header").classList.toggle("header-darkmode");

    const titleNodeArr = document.querySelectorAll(".article-title");
    for (var i = 0; i < titleNodeArr.length; i++) {
      titleNodeArr[i].classList.toggle("article-title-dark")
    }
    const siteNodeArr = document.querySelectorAll(".site-name");
    for (var i = 0; i < titleNodeArr.length; i++) {
      siteNodeArr[i].classList.toggle("site-name-dark")
    }
  }

  async function setSiteData () {
    const tmpDataObj = {};

    for (let prop in data) {
      if (data[prop].enabled) {
        tmpDataObj[prop] = {
          name: data[prop].name,
          url:data[prop].url,
          updateHoursInterval: data[prop].updateHoursInterval,
          lastUpdate: 0,
          enabled: true
        }
      }
    }

    const feedsStr = await promisedStringifyJSON(tmpDataObj);

    settings.querySelector("#json-backup-data").value = feedsStr;
  }

  async function loadData () {
    if (window.confirm("Danger! This will overwrite any existing data and setting you have.")) {
      const dataStr = settings.querySelector("#json-backup-data").value;
      await storeMethodsObj.setItem('feedData', dataStr);
      initFunct();
    }
  }

  async function clearAllData () {
    if (window.confirm("Danger! Deleting data could cause you to lose all added feeds!")) {
      await storeMethodsObj.setItem('feedData', "");
      await storeMethodsObj.setItem('data', "");
    }
  }
}