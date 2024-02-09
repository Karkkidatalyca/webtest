'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "daf05453d2df59cd550dbfe029fbee86",
"assets/AssetManifest.bin.json": "1475aa5a74991a4bd79b6f9fe8d322b3",
"assets/AssetManifest.json": "7998bf89bedd74f2901f65b7cfc531ea",
"assets/assets/clients/blogo1.png": "6acde70f46d77deacff1eaf8c4ffea78",
"assets/assets/clients/blogo2.png": "8756769ac09d4656724ecb692b91c63f",
"assets/assets/clients/blogo3.png": "eae27d50c01d32fbfbd878c04847d2b8",
"assets/assets/clients/c1.jpg": "1d9da85cc4a06034a4568d48e189518c",
"assets/assets/clients/c2.jpg": "e0d812a3037e481490b2f9eda0e4edcd",
"assets/assets/clients/c4.jpg": "0215cd87f6d96da523b7a5eba168788a",
"assets/assets/clients/c5.jpg": "88705d626e15364a66955947c235cc02",
"assets/assets/clients/clients.jpg": "5514a24afa448fe5496391d43e6b63ed",
"assets/assets/faq/faq.png": "2a019c21743c325e0a0e3ef1c8b727bd",
"assets/assets/guide/dimage_1.png": "2cb16f021784f67b10814fb9de29b1ad",
"assets/assets/guide/dimage_10.png": "275ee6b22b4077a9c37c883707bacaf4",
"assets/assets/guide/dimage_11.png": "51b996eefd322b64da27255382d0b0ee",
"assets/assets/guide/dimage_12.png": "ccf621b40e2e03db9741429865991710",
"assets/assets/guide/dimage_13.png": "5a74b50503d3d1bcc3c823cb114ad811",
"assets/assets/guide/dimage_14.png": "159537447f9c148afb0c649e421c49ae",
"assets/assets/guide/dimage_15.png": "783aa8534d0384d9060ea13a1e92bc2a",
"assets/assets/guide/dimage_2.png": "0493e4d0758f012046a5ffce669cb444",
"assets/assets/guide/dimage_3.png": "02f45b7f9ee8b76ceeaebc715a723048",
"assets/assets/guide/dimage_4.png": "8aa19b08614038f0f6395bcd3c6e2993",
"assets/assets/guide/dimage_5.png": "52a2305332122f4b9b3c709240ce618f",
"assets/assets/guide/dimage_6.png": "3ef023c98d02967c0217bb90a606fb58",
"assets/assets/guide/dimage_7.png": "c2baedaa34620e0874724f90ffd93d89",
"assets/assets/guide/dimage_8.png": "fe38270758fac5e38d28e87a8e20d89a",
"assets/assets/guide/dimage_9.png": "15ee652b9a8c73e90286770566b53f18",
"assets/assets/homepage/app_logo.png": "7e1e21acf5c5a6e5dff957dc7ddbc4ab",
"assets/assets/homepage/Badminton.png": "cf329985a092378016019e86b4ce0e2d",
"assets/assets/homepage/birdieins.png": "dc67d9be3724f406778899644342c401",
"assets/assets/homepage/cricket.png": "afa00a341214c5c94c6a72fd9e7a3428",
"assets/assets/homepage/football.png": "54a9d1c51331aa477bcd603c2f9cb9e5",
"assets/assets/homepage/Hamburger.png": "b8d955aca608934d6c41aac8efd89020",
"assets/assets/homepage/image_1.png": "203a78cea05047e01a206d47b9f6863d",
"assets/assets/homepage/image_10.png": "a639a0ba1050e42e529851a06c0ff8db",
"assets/assets/homepage/image_11.png": "fb31f952a5005c3bcc3e88c90fdaff41",
"assets/assets/homepage/image_2.png": "0099aea19809bf04877049fdc3b78603",
"assets/assets/homepage/image_3.png": "03e96d311b44a7416327d7a599b6e0b6",
"assets/assets/homepage/image_4.png": "3a0798b3651432d454994d3b8e8fc820",
"assets/assets/homepage/image_5.png": "742e067d8fd2a0f52258400db2af24d0",
"assets/assets/homepage/image_6.png": "985010254011268b9dbd2e2b326ecb1d",
"assets/assets/homepage/image_7.png": "98c2947bd669e02f8e805036cb138102",
"assets/assets/homepage/image_8.png": "7c8a752c87f2c875d13bb10fe4790bbe",
"assets/assets/homepage/image_9.png": "452d6508506099d3353bcd28ebff2a49",
"assets/assets/homepage/Logo.png": "468fab93534a392942cc2db7557a7eb5",
"assets/assets/homepage/tennis.png": "c67d3d7814b1fcdc92aff5d40019da0a",
"assets/assets/oferings/biname_1.png": "995f22f474e13d18e7dd0bf05dfecbe4",
"assets/assets/oferings/biname_10.png": "16b4c8e1094d273ac5f9c5922bcb91d6",
"assets/assets/oferings/biname_11.png": "76a0f063bbda28cf3931b1c542360243",
"assets/assets/oferings/biname_12.png": "6913b3f0f5d918809479b61c542a0dd6",
"assets/assets/oferings/biname_13.png": "abe505f54c6cdd11e6afbf7108f27478",
"assets/assets/oferings/biname_14.png": "325c7e80ec4eb424b6bbb4dbb0757dc8",
"assets/assets/oferings/biname_2.png": "1b1de923b18820e10fbbf9fa37f80858",
"assets/assets/oferings/biname_3.png": "46a50da7a2b5b0f284bfd2dfeed0280b",
"assets/assets/oferings/biname_4.png": "93df0f2e4944520e2488b121109f981e",
"assets/assets/oferings/biname_5.png": "af93cb7cd44794f1492c92582f7eae55",
"assets/assets/oferings/biname_6.png": "91d57fee9ffb5f14d667befd56bd77e1",
"assets/assets/oferings/biname_7.png": "438121cafde0627973bca1b8e5010d47",
"assets/assets/oferings/biname_8.png": "592903dd125a3a8ca18be8060dd19d5f",
"assets/assets/oferings/biname_9.png": "9f26dc74e6642ceef2d5f331a64d84c6",
"assets/assets/subscription/simage_1.png": "082870a89c405e08ea3245c86510e7cf",
"assets/assets/subscription/simage_2.png": "da2cb93a441431ce6fdaf4e2cccbe19b",
"assets/assets/subscription/simage_3.png": "1507221ae685093e6a2306c29f32c79d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1a6e8b8d084ac3703112265e151d4932",
"assets/NOTICES": "74715164d5932e502a30c0ae7b406ad5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7daae513ba1aab421ac5bd88f36afa8b",
"/": "7daae513ba1aab421ac5bd88f36afa8b",
"main.dart.js": "8b3d30fcb48d52992824abdbc7107bed",
"manifest.json": "1743e50cdcc59fd847f4e29662fd6934",
"version.json": "228259fe0ff9c7695e81790d527afb49"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
