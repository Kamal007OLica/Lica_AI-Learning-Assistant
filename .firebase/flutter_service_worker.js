'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-192.png": "90352f318579b4a85bbb9201fb5b5505",
"icons/Icon-maskable-512.png": "23b5c024ad634bfc0c87a159d205c870",
"icons/Icon-192.png": "90352f318579b4a85bbb9201fb5b5505",
"icons/Icon-512.png": "23b5c024ad634bfc0c87a159d205c870",
"manifest.json": "75e47e12ab2ab6c3f3afe776a8000efd",
"assets/AssetManifest.bin": "cb76e0d49032ab25f87bc6d15c482a1a",
"assets/AssetManifest.bin.json": "5021b28df5efabbc20941dc882ca1bf9",
"assets/AssetManifest.json": "8356f0a6e75741e7cc3c60b2c5ba9f53",
"assets/fonts/MaterialIcons-Regular.otf": "c96e831a22940dfff691b7b1c969c61a",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/assets/img/side_bar/trash.png": "512a8f6c3722c1b8c60195848c0dd3da",
"assets/assets/img/side_bar/info.png": "f5b87c02bab866c690d2a41867b75be7",
"assets/assets/img/side_bar/link.png": "662953a15200357f4de31ef4b23c4859",
"assets/assets/img/side_bar/sparkle.png": "bf5cd877e1f198f094f2146309a59b50",
"assets/assets/img/side_bar/search.png": "ccd64267954fc93266772ca21ce506d3",
"assets/assets/img/side_bar/notebooks.png": "f09b8dda13b6321c0390c474d28981b8",
"assets/assets/img/side_bar/eye.png": "f2eb180ff57cd03abb80eef3c52f7605",
"assets/assets/img/side_bar/compass.png": "23f6bb189b05d28231d28ab8edfabc9a",
"assets/assets/img/side_bar/calendar.png": "9ac7ec52bff4868c758808b365705bc7",
"assets/assets/img/side_bar/copy.png": "ad50c1f72784fbc3a1aba712175cbe40",
"assets/assets/img/side_bar/add-notebook.png": "dfef4630a80e1fefb9504632bce6d4b3",
"assets/assets/img/side_bar/dashboard.png": "79190c68f7a61665b7c3b60d11fded42",
"assets/assets/img/side_bar/todos.png": "ebe7fce86581aad4f49224cd9b757ef1",
"assets/assets/img/side_bar/arrow-left.png": "c1b59b4671223a714373df5699ea0d54",
"assets/assets/img/side_bar/diamond.png": "b9ad415ca23513d8c6dd9e99e692744b",
"assets/assets/img/side_bar/create-note.png": "4cb2de839d0c097c1e76d4310a5765dd",
"assets/assets/img/side_bar/arrow-right.png": "52ae5ff54f3a55e3cfc67a3ccef08b8b",
"assets/assets/img/side_bar/arrow-down.png": "bb73df05b4c03f80ad2c4bbb0b04551a",
"assets/assets/img/side_bar/growth-up.png": "e851b66ae14ad0cd54917726ecb626f7",
"assets/assets/img/side_bar/profile.png": "629f84cbd0a82cf280a73f425e9ef38b",
"assets/assets/img/side_bar/side-bar.png": "9a9115d8450e80283b587d76a3a0e87b",
"assets/assets/img/side_bar/notebook.png": "0d3e3f2bb3d683458d49b71fd1f5cdd0",
"assets/assets/img/side_bar/message.png": "e68b03ab40fca4314ff7c940cb053010",
"assets/assets/img/home/red_circ.png": "910c1e56b2348d370c982d203b6e148c",
"assets/assets/img/home/radio.png": "377201edc6c8ddb88fa000fb04a31d3f",
"assets/assets/img/home/heart.png": "ffdfc171cdc98e37a2c1e822cd465f1b",
"assets/assets/img/home/pause.png": "40452bf3dd61cee2f7dab6c2c2040094",
"assets/assets/img/sign_in/pr3.png": "2bf03ff08367387003a6e0a87b0efcb4",
"assets/assets/img/sign_in/pr1.png": "19d67df68744989fc738bff1cf4d368b",
"assets/assets/img/sign_in/pr2.png": "b7faad9d824107fa7ab0a00b4ec0af6b",
"assets/assets/img/cta/lica_cta_hover.png": "54fabcd4f49f1d2a3c8a453cb7cb9f5a",
"assets/assets/img/cta/edit.png": "97485809c934e1fba6bbfe6e095bb6cf",
"assets/assets/img/cta/lica_cta_default.png": "8d6c97548b2dbc58992840fdf045ae84",
"assets/assets/img/cta/file.png": "5a203f0380a4cc6b4bc83bf7165153bc",
"assets/assets/img/cta/coffee.png": "a48e2756819214979bb5bd19c44ef581",
"assets/assets/img/notes/notebook_grey.png": "c2a2c785c150a09562c61ec637dd1ae3",
"assets/assets/img/notes/bookmark.png": "dcf62acbe2297467b7d0bd131a511b76",
"assets/assets/img/notes/notebook_big.png": "f825d45533d509abcf537d72665ee67d",
"assets/assets/img/notepad/image.png": "1bfc160d5563f274cdbdd60d78af0d16",
"assets/assets/img/notepad/printer.png": "7261f02a20777e3ebec25a9d6c0e4f18",
"assets/assets/img/notepad/copy.png": "6536a116747678336ce58c8125faf53c",
"assets/assets/img/notepad/undo.png": "960b666006d28432cf1bb1630384b328",
"assets/assets/img/notepad/duplicate.png": "87d4a5f7265cd76c38acfb68391f025d",
"assets/assets/img/notepad/pdf.png": "bebe482e66884c7f24d8f894fa363339",
"assets/assets/img/notepad/move.png": "9a13e2d4d067c4d5847176ed21f1a1e7",
"assets/assets/img/notepad/compress.png": "9a8907b1eeafa327327174b4fd49c52b",
"assets/assets/img/notepad/note_share_bg.png": "507afc63c76734665112e01768c92d70",
"assets/assets/img/notepad/redo.png": "2ec220cb0a9ea0ead0eb2e6909656bb2",
"assets/assets/img/notepad/expand.png": "9d3a116e102bf235a6e7b8f50c471ab0",
"assets/assets/img/notepad/youtube_logo.png": "25a55afd7d9e5880716d4187002cf54c",
"assets/assets/img/notepad/delete.png": "3f92063d32d5b3a8d2c3b7d569e55197",
"assets/assets/img/notepad/remainder.png": "c5bb26bd6c148006ecaa1b9aba18eaab",
"assets/assets/img/dynamic_cv/phone.png": "a8ff589b5f41f780909313e832927723",
"assets/assets/img/dynamic_cv/info.png": "0f289b758cc102dae9e1101db3637b62",
"assets/assets/img/dynamic_cv/sparkle.png": "15f095c4aebc869915ee1ca46abe39a4",
"assets/assets/img/dynamic_cv/github.png": "b1e62b6afcee39206df62953c6454d5a",
"assets/assets/img/dynamic_cv/calendar.png": "94e627eb6d04047876b5dfb7540293ac",
"assets/assets/img/dynamic_cv/cgpa.png": "c36ba5556649a5fee30e6c8c9f7115aa",
"assets/assets/img/dynamic_cv/location.png": "30b498aebeae0edb7fb20dc8ada49ee5",
"assets/assets/img/dynamic_cv/secured.png": "d9f7341d1e30bd697c4c7d77ee44f52d",
"assets/assets/img/dynamic_cv/up_arrow_growth.png": "dd9fee9634e6a28833dfd829f1476590",
"assets/assets/img/dynamic_cv/notes_created.png": "6cfcac411c874749812f1623ce40c04f",
"assets/assets/img/dynamic_cv/mail.png": "e7c1c1f28089e7b5939538a18ce0b647",
"assets/assets/img/dynamic_cv/linkedIn.png": "07466cb8ab083e247446205f02cb0563",
"assets/assets/img/dynamic_cv/figma_outlined.png": "df220d431552d845f590f86728cc45a7",
"assets/assets/img/dynamic_cv/website.png": "6dc884b68981416bddb13718ecec4c64",
"assets/assets/img/splash/image.png": "5b65bf877a5b7ef5ef6e203e58bd2793",
"assets/assets/img/splash/background.png": "ef80ea4ccbe70ec569468aca3dcb1d10",
"assets/assets/img/splash/branding.png": "223127145425cec26fea521389a9514e",
"assets/assets/img/splash/icon.png": "85c80b3cc86bba6def439d215eac5d8d",
"assets/assets/img/profile/golden_badge.png": "e72d79378c7ed9ae0ad437a830a74356",
"assets/assets/img/profile/prof4.png": "9dc1aa1a4db1bd3c215585ded398d80b",
"assets/assets/img/profile/golden_badge_shadow.png": "a5b36542244416f48f3469706dda475e",
"assets/assets/img/profile/prof3.png": "0f96eb6e6ce6ee53da2af5434d324bd1",
"assets/assets/img/profile/prof5.png": "35ef17f9ee1870a945bd487a7c00f459",
"assets/assets/img/profile/prof2.png": "bb3a57b7dbc276d07a975dbc3faa11de",
"assets/assets/img/profile/prof6.png": "468b9a624aafacdc30dadef2743368b7",
"assets/assets/img/profile/prof1.png": "8d6060c16c14058fd66a42459909cce4",
"assets/assets/img/chats/doc.png": "9e7f6f9a716a99ff51988e1ae764bfe0",
"assets/assets/img/chats/bookmark-menu.png": "26444b7dc9e882c71f37abc3e18f045c",
"assets/assets/img/chats/reply.png": "9555bd83557c2c55249d0e6e499aafd6",
"assets/assets/img/chats/single_tick_white.png": "967a39b34d49358d28dccb5e7e4444ea",
"assets/assets/img/chats/search.png": "598303ad5bf24ed960c5f347d3dbb5fa",
"assets/assets/img/chats/lica-note.png": "6bf28c0ce2ae1b9f8c60e64fd3b57e4a",
"assets/assets/img/chats/attach.png": "db6b7d3b26db0207e6839495a6855b8a",
"assets/assets/img/chats/copy.png": "229830a65b9743c2649c5f8e4bb42ae8",
"assets/assets/img/chats/export.png": "538707ee4ac91a8eed28ec7ed0bc854c",
"assets/assets/img/chats/single_tick_grey.png": "0ac7248b3a81bf90b97317147e7d50df",
"assets/assets/img/chats/mute.png": "34a7bc77c132f71b0684b4f8f596ab32",
"assets/assets/img/chats/share.png": "abdac5ba56e55d601501631f5d380efe",
"assets/assets/img/chats/smile.png": "68e25d88e7f646c4d22852c14a3d152f",
"assets/assets/img/chats/select.png": "487b29eb071b8b9ea925551d0f9e2bee",
"assets/assets/img/chats/video.png": "8baf6b1bcdba2bbdb1ff73dabf87dcae",
"assets/assets/img/chats/clear.png": "4ba7a5ed04b8344533113923d1c42937",
"assets/assets/img/chats/more-vertical.png": "fbc14c1a8fc3392a2ed56980c0bb1914",
"assets/assets/img/chats/bookmark.png": "ce22dddaab7d1c071c504bdd4acd6927",
"assets/assets/img/chats/group.png": "5b472ae2838e377afe0d87fcc8eb70e3",
"assets/assets/img/chats/forward.png": "1c8e066e72dea317411e825f6f039215",
"assets/assets/img/chats/reminder.png": "d3ffaadc1b9167b2d7c7fc3114bc23f8",
"assets/assets/img/chats/single_tick.png": "ef35af7815c35fcd1754be31ecfbf6fe",
"assets/assets/img/chats/double_tick.png": "cd9069c9446317155b0ca9ec157bbb2a",
"assets/assets/img/chats/delete.png": "96fba15d8ec83c1ab7b9e75d24848311",
"assets/assets/img/chats/double_tick_white.png": "0dfa0894ee20030c23a05073b93bda4c",
"assets/assets/img/calendar/calendar_poster.png": "5985ab2dd5f22e2107df1499df5b6251",
"assets/assets/img/calendar/conference.png": "772cf825a0f48627c48c3d3154c33732",
"assets/assets/img/calendar/location.png": "4b57d8c13b2b70e4bcc15b1134b277f4",
"assets/assets/img/calendar/clock.png": "349d51308c5dc05037004f8cfe9113e4",
"assets/assets/img/calendar/participants.png": "7e5c4b1ad1528e8c9f6ce5b4a17dc84b",
"assets/assets/img/calendar/docs.png": "f8b6b943d3f0736e904f21f83a98ed4a",
"assets/assets/img/ui_test/expertise1.png": "00dc83378af5ac12e9493157ca2d12a6",
"assets/assets/img/ui_test/ach2.png": "4aa91529192b03d9583818b8e90bd82d",
"assets/assets/img/ui_test/motion.png": "803d7eb6630f1bc88676c48bd6d06f51",
"assets/assets/img/ui_test/ach3.png": "c14acdbd5ab2c40ca9687cae77608bb6",
"assets/assets/img/ui_test/expertise2.png": "d0fc77a6af30ca1738fc294d4425718e",
"assets/assets/img/ui_test/golden_badge.png": "de5b4f35c0a14a9bb46830643ecba7df",
"assets/assets/img/ui_test/dp.png": "0ad50246f3d1954705a00553371bad93",
"assets/assets/img/ui_test/staff_dp.png": "cf196aaae3bd039c5422b4f565cd2de1",
"assets/assets/img/ui_test/figma.png": "da9b7450fb84f352994b84c0f2121a87",
"assets/assets/img/ui_test/expertise4.png": "ca36278b2330d6154e88c14929ff0d47",
"assets/assets/img/ui_test/lica.png": "48bfd2e47d87be173b75b6a68bf3d20c",
"assets/assets/img/ui_test/python.png": "00dc83378af5ac12e9493157ca2d12a6",
"assets/assets/img/ui_test/cpp.png": "4ed9989d382fd276c9e4bbcbb0e2179a",
"assets/assets/img/ui_test/ach1.png": "d0fc9bb88251fbe12addbf4a2a8af660",
"assets/assets/img/ui_test/django.png": "d0fc77a6af30ca1738fc294d4425718e",
"assets/assets/img/ui_test/ss.png": "2f0e4243e3d9c5d63556a04e7f3b143e",
"assets/assets/img/ui_test/file.png": "7000a3959959101626b091a0879ee1b5",
"assets/assets/img/ui_test/expertise3.png": "4ed9989d382fd276c9e4bbcbb0e2179a",
"assets/assets/img/ui_test/firebase.png": "79ead1cd05d0df363e62d5854eb65cdf",
"assets/assets/img/ui_test/flutter.png": "ca36278b2330d6154e88c14929ff0d47",
"assets/assets/img/ui_test/kct.png": "f9b3c182289d5273ce4b5fbe77dd218a",
"assets/assets/img/logo/microsoft.png": "3af1de557ad62c4e794404619c07947f",
"assets/assets/img/logo/google.png": "b69b5d5342078e536cb254a0152ee850",
"assets/assets/img/logo/apple.png": "5e4d25bd93399e6d3fdbeb7869d31b96",
"assets/assets/img/todos/tasks.png": "76f67d3c3d24824682e3037859ae0281",
"assets/assets/img/todos/link.png": "66d50ef42a4729012b37d0e0ab48942d",
"assets/assets/img/todos/version2-update.png": "f17644e3854ce58258fbd27c68b63724",
"assets/assets/img/todos/calendar.png": "ce3fbb4354a8fc04725d1758d5201998",
"assets/assets/img/todos/lica_note.png": "cd68c7945f6b99bfcc0a9e5b1288dc76",
"assets/assets/img/todos/cube.png": "a00be772cb42a02b4319cb82cb777288",
"assets/assets/img/todos/chevron_right.png": "73f62f8b91a77deea215024bbdfddb98",
"assets/assets/img/todos/pending.png": "7ad2e532bad47e3d47ceaa0d52258928",
"assets/assets/img/todos/lica_note_small.png": "aeec5d7590c436af9ae248dadaf5bd03",
"assets/assets/img/todos/add.png": "e82b862d93c16d6c9136264d11eb3cad",
"assets/assets/img/todos/completed.png": "51b18878e8531b2f5ebd2f96b9b921fa",
"assets/assets/img/todos/chevron_left.png": "73e26963c7a0e387ff763ed1d25948cc",
"assets/assets/img/todos/flag.png": "3ecbd0a5c7b1ede1d8d41d138b101ba5",
"assets/assets/img/class_box/notes.png": "502340fa0b0ca94d123aeee57d852838",
"assets/assets/img/class_box/messages.png": "0162ce9772f9d58ab96d910b9938d7fd",
"assets/assets/img/common/collab_learning.png": "5b472ae2838e377afe0d87fcc8eb70e3",
"assets/assets/img/common/phone.png": "cfa86990ab74941f170edeb080299a2c",
"assets/assets/img/common/golden_badge.png": "fd1aedf59ab3af076daa38ead1cb2ba2",
"assets/assets/img/common/time_left.png": "539312f5516dcdc0b18732b70407a7c8",
"assets/assets/img/common/settings.png": "e4b587a66cb57d86bf1aa04801bfa9d6",
"assets/assets/img/common/globe.png": "e9a8789f00a5a6860b4b74b42e4ee83e",
"assets/assets/img/common/lica.png": "ac0e80536b3f2deb5ba9a1a59f7b6fcd",
"assets/assets/img/common/golden_invite_ticket.png": "68d80bb930f1f6144fdc81cce2e95105",
"assets/assets/img/common/signal.png": "5f8bb6d7a16d0101d6d61995e4ff7062",
"assets/assets/img/common/more_vertical.png": "494406cb6bb4143f3bc79ea6cb2f81f2",
"assets/assets/img/common/profile.png": "92b1f6ff78bf7adf00820d5d3cb26313",
"assets/assets/img/common/upload.png": "1150b92b5947e7ddc77e0d398309edd9",
"assets/assets/img/onboard/success_tick.png": "c5c22bcd2ed336efe4ab97f3403bb7cc",
"assets/assets/img/onboard/edit.png": "4707635c98949cad1d71ba8d082fcfcb",
"assets/assets/img/onboard/upload.png": "af022cca7180e9a248d29e8417697236",
"assets/assets/img/note_box/summary.png": "ddcdf119e17b6dd53f1f3556d5ee3f67",
"assets/assets/img/note_box/modify.png": "0a0366b45e288162e0e2e7b991920f65",
"assets/assets/img/note_box/test.png": "62097599663ac2d2dcb6cad0b98a045a",
"assets/assets/img/note_box/upload.png": "6f5e0916a1bcc176d56cfa315d504216",
"assets/assets/img/note_box/note.png": "ebc95b1b7e9806b6111c2383b2b2c03e",
"assets/NOTICES": "b46ddaed8721c0177b884c02697599d8",
"assets/FontManifest.json": "ea9dc826036577df024fd0fe176dd298",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"favicon.png": "33544722f92e47063ebe5673f7caf777",
"index.html": "a41a343bd3cfdcb3da2851627e539a24",
"/": "a41a343bd3cfdcb3da2851627e539a24",
"splash/img/branding-dark-1x.png": "d105d8f11ae683ae22f302d686dd3650",
"splash/img/light-3x.png": "d5c9d0760e12b8dfd1502592d8940380",
"splash/img/branding-dark-4x.png": "ca820eadcb6b5b4b096154903b3759dd",
"splash/img/dark-3x.png": "d5c9d0760e12b8dfd1502592d8940380",
"splash/img/branding-2x.png": "a051ed758bbc91507fd74d466c05f85e",
"splash/img/branding-1x.png": "d105d8f11ae683ae22f302d686dd3650",
"splash/img/branding-dark-2x.png": "a051ed758bbc91507fd74d466c05f85e",
"splash/img/light-background.png": "ef80ea4ccbe70ec569468aca3dcb1d10",
"splash/img/branding-dark-3x.png": "71de4f48db4501d1ef4cd31e4ecb3752",
"splash/img/dark-2x.png": "c8dd042a52d956991408adbcb742dc65",
"splash/img/light-4x.png": "d04eac743d8bea27d412cad3df001521",
"splash/img/light-2x.png": "c8dd042a52d956991408adbcb742dc65",
"splash/img/branding-3x.png": "71de4f48db4501d1ef4cd31e4ecb3752",
"splash/img/branding-4x.png": "ca820eadcb6b5b4b096154903b3759dd",
"splash/img/dark-4x.png": "d04eac743d8bea27d412cad3df001521",
"splash/img/light-1x.png": "9be5f4b9c3a8045986ff0167d69f77e7",
"splash/img/dark-1x.png": "9be5f4b9c3a8045986ff0167d69f77e7",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"main.dart.js": "dbe9805989aa25b3d978270684dbf333",
"version.json": "52301bc40a14a79aaf0a9bb6dd49e469",
"flutter_bootstrap.js": "5b4e0ac894b0a4455efe01c04a9c4929"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
