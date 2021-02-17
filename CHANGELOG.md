# Changelog

## [v1.5.6](https://gitlab.com/upstra/web/ui-kit/compare/v1.5.5...v1.5.6)

#### 4 February 2021

### Fixes

- remove globalThis since some runtimes were throwing error at it ([`7ee7644`](https://gitlab.com/upstra/web/ui-kit/commit/7ee764483ea34895ef6dbd9cb9410ed3ad120f4d)) (by Valeriy Malyshev)

### Commits

- [`UP-1173`](https://ekoapp.atlassian.net/browse/UP-1173) - fixed showing community avatar ([`85161fe`](https://gitlab.com/upstra/web/ui-kit/commit/85161fe2ed01ba7b3f6518285446d174f93349ce)) (by Serhii Ivanenko)
- [`UP-755`](https://ekoapp.atlassian.net/browse/UP-755) - changed order for comments output; added load more button for comments ([`ebea5c6`](https://gitlab.com/upstra/web/ui-kit/commit/ebea5c6a9f961d0456b5eb9d75e7c2424b62f5c5)) (by Serhii Ivanenko)
- [`UP-1206`](https://ekoapp.atlassian.net/browse/UP-1206) - removed timestamp for deleted comment ([`97673e7`](https://gitlab.com/upstra/web/ui-kit/commit/97673e74566d468839b5c5157d3a3ea7203ed656)) (by Serhii Ivanenko)
- [`UP-755`](https://ekoapp.atlassian.net/browse/UP-755) - fixed pagination issues ([`34e58ae`](https://gitlab.com/upstra/web/ui-kit/commit/34e58aeae0596947ac46ac5690a59678084921d5)) (by Serhii Ivanenko)
- [`UP-1192`](https://ekoapp.atlassian.net/browse/UP-1192) - fixed text overflow ([`88aacb7`](https://gitlab.com/upstra/web/ui-kit/commit/88aacb76fe42cf8f762ce4546cb1c15745da524a)) (by Serhii Ivanenko)
- [`UP-1171`](https://ekoapp.atlassian.net/browse/UP-1171) - added watcher for avatar file id; fixed save when select only avatar ([`11fdf5e`](https://gitlab.com/upstra/web/ui-kit/commit/11fdf5e9ce2efac3ee59da8c630e8e8a3c2bacfa)) (by Serhii Ivanenko)

---

## [v1.5.5](https://gitlab.com/upstra/web/ui-kit/compare/v1.5.4...v1.5.5)

#### 19 January 2021

### New Features

- added auto-changelog management ([`9f95348`](https://gitlab.com/upstra/web/ui-kit/commit/9f953482b1fe3e9176a756bb0968a818d042ea9d)) (by Julien Barbay)

### Commits

- [`UKT-1409`](https://ekoapp.atlassian.net/browse/UKT-1409) - added notification for comment report ([`9bcea5f`](https://gitlab.com/upstra/web/ui-kit/commit/9bcea5f84e9a88be24dccc30ef9d2a068c38cab2)) (by Serhii Ivanenko)
- [`UKT-1412`](https://ekoapp.atlassian.net/browse/UKT-1412) - allow unreport comment ([`ab7c789`](https://gitlab.com/upstra/web/ui-kit/commit/ab7c78947db2ea7ab88546552cd6dbf081ef8ec6)) (by Serhii Ivanenko)
- [`UKT-1400`](https://ekoapp.atlassian.net/browse/UKT-1400) - fixed bugs with user selector ([`c263219`](https://gitlab.com/upstra/web/ui-kit/commit/c26321907552492b87ad1f24f1d619fa640ab943)) (by Serhii Ivanenko)
- [`UKT-1150`](https://ekoapp.atlassian.net/browse/UKT-1150) - fixed scroll on background for modal ([`efaae35`](https://gitlab.com/upstra/web/ui-kit/commit/efaae35965956ed86814b8880830eea84ed14c58)) (by Serhii Ivanenko)
- [`UKT-1409`](https://ekoapp.atlassian.net/browse/UKT-1409) - updated eko-sdk version ([`0d8a25b`](https://gitlab.com/upstra/web/ui-kit/commit/0d8a25bb768a62dfb1f0bc415a6fb77f78df2399)) (by Serhii Ivanenko)
- [`UKT-1407`](https://ekoapp.atlassian.net/browse/UKT-1407) - show no more than 2 lines ([`5947efe`](https://gitlab.com/upstra/web/ui-kit/commit/5947efe3a3c7f3c4ba8323110ae5441353870019)) (by Valeriy Malyshev)
- [`UKT-1167`](https://ekoapp.atlassian.net/browse/UKT-1167) fix show wrong icon file types (.pptx, .xlsx) ([`c62a4bf`](https://gitlab.com/upstra/web/ui-kit/commit/c62a4bfb21c8fa681872938d77cebb6d08573d08)) (by Chaiwat Trisuwan)
- [`UKT-1412`](https://ekoapp.atlassian.net/browse/UKT-1412) - fixed flagged by me ([`d95f6d1`](https://gitlab.com/upstra/web/ui-kit/commit/d95f6d1a464309621a603cd9067fe058ed41a0fa)) (by Serhii Ivanenko)
- [`UKT-1401`](https://ekoapp.atlassian.net/browse/UKT-1401) - go to the community page when clicking on the community name ([`50bfcf4`](https://gitlab.com/upstra/web/ui-kit/commit/50bfcf4e5d6b1050faecad38209086fc0869d191)) (by Valeriy Malyshev)
- [`UKT-1400`](https://ekoapp.atlassian.net/browse/UKT-1400) - scroll input into view when user is added to the input ([`3f5fc07`](https://gitlab.com/upstra/web/ui-kit/commit/3f5fc077f9f6f2ec9c8c8d71c88212ca92b06bc9)) (by Valeriy Malyshev)
- [`UKT-1408`](https://ekoapp.atlassian.net/browse/UKT-1408) - fixed broken user profile; fixed redirect to user settings form; added counter and fixed error displaying for user input ([`66b0704`](https://gitlab.com/upstra/web/ui-kit/commit/66b0704c34e3a40107c3d4bbfc5fd5132dec7f6e)) (by Serhii Ivanenko)
- [`UKT-1412`](https://ekoapp.atlassian.net/browse/UKT-1412) - allow unreport comment; added notification message for this ([`0659e54`](https://gitlab.com/upstra/web/ui-kit/commit/0659e54acadeb01cf9775c3db5aabf3996b5969e)) (by Serhii Ivanenko)
- [`UKT-1409`](https://ekoapp.atlassian.net/browse/UKT-1409) - fixed CR issues ([`7e9ab77`](https://gitlab.com/upstra/web/ui-kit/commit/7e9ab770940822414429c5e9c3e850ab10d34692)) (by Serhii Ivanenko)
- adding version info in global ([`b22c6c2`](https://gitlab.com/upstra/web/ui-kit/commit/b22c6c2697f57516ab022fe285d38574b1817ecc)) (by Julien Barbay)
- fix "TypeError: channels.map is not a function" ([`14f2a32`](https://gitlab.com/upstra/web/ui-kit/commit/14f2a32143866c2569899099739782b6c4c96f3c)) (by Valeriy Malyshev)
- fix broken profile ([`ff23c24`](https://gitlab.com/upstra/web/ui-kit/commit/ff23c24c5ceed17a93f4fd9ff310d25389529988)) (by Valeriy Malyshev)
- [`UKT-1397`](https://ekoapp.atlassian.net/browse/UKT-1397) user can edit delete their post in community that they are not member ([`8363a06`](https://gitlab.com/upstra/web/ui-kit/commit/8363a0668cb62821c774df2eddfeed18634b872c)) (by Chaiwat Trisuwan)
- [`UKT-1408`](https://ekoapp.atlassian.net/browse/UKT-1408) - fixed broken user profile; fixed redirect to user settings form; added counter and fixed error displaying for user input ([`f01cc5f`](https://gitlab.com/upstra/web/ui-kit/commit/f01cc5f27c2bc299a474674ef47404e4a4aec0cf)) (by Serhii Ivanenko)
- [`UKT-1412`](https://ekoapp.atlassian.net/browse/UKT-1412) - fixed text on 3dots button menu when comment reported ([`d8b1650`](https://gitlab.com/upstra/web/ui-kit/commit/d8b16506a54e7a20beb37769f3ec07c6647b44f7)) (by Serhii Ivanenko)
- small community name adjustment + refactoring ([`c65e998`](https://gitlab.com/upstra/web/ui-kit/commit/c65e9982744ff697274b380bd1019806cb607617)) (by Julien Barbay)
- [`UKT-1409`](https://ekoapp.atlassian.net/browse/UKT-1409) - added notification for comment report ([`ec477f8`](https://gitlab.com/upstra/web/ui-kit/commit/ec477f8477d9d2073f54d1492ed786284108d909)) (by Serhii Ivanenko)
- [`UKT-1412`](https://ekoapp.atlassian.net/browse/UKT-1412) - fixed according to code review ([`cd12a77`](https://gitlab.com/upstra/web/ui-kit/commit/cd12a771ea064ed77bd45ce861b6137ca19ebfdd)) (by Serhii Ivanenko)
- [`UKT-1403`](https://ekoapp.atlassian.net/browse/UKT-1403) - fixed 3dots button position for comments ([`98ef805`](https://gitlab.com/upstra/web/ui-kit/commit/98ef8054d589fccb2514f6c812031757954689e4)) (by Serhii Ivanenko)
- [`UKT-1407`](https://ekoapp.atlassian.net/browse/UKT-1407) - fix argtypes ([`1900599`](https://gitlab.com/upstra/web/ui-kit/commit/1900599ab399e02720af4512e08974ef9defe25e)) (by Valeriy Malyshev)
- [`UKT-1394`](https://ekoapp.atlassian.net/browse/UKT-1394) - dissallow to report post if user is the post creator ([`0205dc7`](https://gitlab.com/upstra/web/ui-kit/commit/0205dc735955e270a2ebd49e402502d467cce2a4)) (by Valeriy Malyshev)
- [`UKT-1394`](https://ekoapp.atlassian.net/browse/UKT-1394) - fixed show report post menu for non community posts ([`aff32f5`](https://gitlab.com/upstra/web/ui-kit/commit/aff32f570e1178cb34f28eabc2c5fee2b889448f)) (by Serhii Ivanenko)
- [`UKT-1399`](https://ekoapp.atlassian.net/browse/UKT-1399) - fixed truncating max lines for post text content; fixed story ([`63ed209`](https://gitlab.com/upstra/web/ui-kit/commit/63ed209ede65930b1e8bcd121b6c6297be0582a7)) (by Serhii Ivanenko)
- [`UKT-1412`](https://ekoapp.atlassian.net/browse/UKT-1412) - changed notification message ([`6fc02fe`](https://gitlab.com/upstra/web/ui-kit/commit/6fc02fe183b692b6992cbb90834faf8c042c7636)) (by Serhii Ivanenko)
- [`UKT-1409`](https://ekoapp.atlassian.net/browse/UKT-1409) - updated eko-sdk version ([`ca7d712`](https://gitlab.com/upstra/web/ui-kit/commit/ca7d7125c37d5549df74b0e47f435488f62a48a9)) (by Serhii Ivanenko)
- [`UKT-1150`](https://ekoapp.atlassian.net/browse/UKT-1150) - remove the focus outline ([`d676433`](https://gitlab.com/upstra/web/ui-kit/commit/d6764332fb86f32155333a2ed64753e0daa780d5)) (by Valeriy Malyshev)
- [`UKT-1398`](https://ekoapp.atlassian.net/browse/UKT-1398) - fixed min suggestions length for search input ([`923c2e6`](https://gitlab.com/upstra/web/ui-kit/commit/923c2e68accdee8be7b8a6f247b534d54c26c416)) (by Serhii Ivanenko)
- [`UKT-1409`](https://ekoapp.atlassian.net/browse/UKT-1409) - updated eko-sdk version ([`c3b8d7c`](https://gitlab.com/upstra/web/ui-kit/commit/c3b8d7c78ac3a76330c7481c5316c05384eefcaf)) (by Serhii Ivanenko)
- fixing storybook version issue ([`897a8cf`](https://gitlab.com/upstra/web/ui-kit/commit/897a8cf0d5aad6862e863d4a26558df640986149)) (by Julien Barbay)
- increase max length of the profile name ([`1f177c3`](https://gitlab.com/upstra/web/ui-kit/commit/1f177c37e1c6ad87d40f62bf5fce85be95921662)) (by Valeriy Malyshev)
- refactor allOptions logic ([`154d9f8`](https://gitlab.com/upstra/web/ui-kit/commit/154d9f861afa565a2f7cca951f2192a8693f9fe3)) (by chaiwattsw)
- make able webpack.config.js to use by IntelliJ IDEA for module resolution ([`435fbc9`](https://gitlab.com/upstra/web/ui-kit/commit/435fbc9b60a0bc6f68f69db378c8730083b0fc84)) (by Valeriy Malyshev)
- [`UKT-1398`](https://ekoapp.atlassian.net/browse/UKT-1398) - fixed min suggestions length for search input ([`8a63f80`](https://gitlab.com/upstra/web/ui-kit/commit/8a63f807d1dccfb228425df863a0ae976ccd33b7)) (by Serhii Ivanenko)
- force Windows to use the unix line ending ([`4733f62`](https://gitlab.com/upstra/web/ui-kit/commit/4733f628e20d3b76826a605d896ffbef018f1e37)) (by Valeriy Malyshev)

---

## [v1.5.4](https://gitlab.com/upstra/web/ui-kit/compare/v1.5.3...v1.5.4)

#### 17 December 2020

### Commits

- [`UKT-1390`](https://ekoapp.atlassian.net/browse/UKT-1390) - show notification for connection error on files uploading; added useErrorNotification hook ([`2037d7f`](https://gitlab.com/upstra/web/ui-kit/commit/2037d7f6120b06a8cc550c85ce4329d36a20b8a3)) (by Serhii Ivanenko)
- [`UKT-1373`](https://ekoapp.atlassian.net/browse/UKT-1373) - add can\* flags ([`eb9cafb`](https://gitlab.com/upstra/web/ui-kit/commit/eb9cafbd886378292dfc02145ed52b42b0ce5575)) (by Valeriy Malyshev)
- [`UKT-1373`](https://ekoapp.atlassian.net/browse/UKT-1373) - simplify a little ([`d67f529`](https://gitlab.com/upstra/web/ui-kit/commit/d67f5295c2456bdcaebe30bc16660a6ca1c87caa)) (by Valeriy Malyshev)
- [`UKT-1373`](https://ekoapp.atlassian.net/browse/UKT-1373) - show comments for posts from communitites the user has not joined. ([`e21dda8`](https://gitlab.com/upstra/web/ui-kit/commit/e21dda8c32f57ce93b050984308342eda07d312b)) (by Valeriy Malyshev)
- [`UKT-1373`](https://ekoapp.atlassian.net/browse/UKT-1373) - rename isReadOnly to canInteract ([`7923312`](https://gitlab.com/upstra/web/ui-kit/commit/79233124134a72f3258f6df1e1aa38f7b204d137)) (by Valeriy Malyshev)
- [`UKT-1386`](https://ekoapp.atlassian.net/browse/UKT-1386) - fixed disabled status for submit button of community form when there no changes ([`0bad6c5`](https://gitlab.com/upstra/web/ui-kit/commit/0bad6c5c41f0f2a44db46307d6ff37ef33e6880a)) (by Serhii Ivanenko)
- [`UKT-1373`](https://ekoapp.atlassian.net/browse/UKT-1373) - add isReadOnly params to stories ([`4710c31`](https://gitlab.com/upstra/web/ui-kit/commit/4710c314d044e71be3b25bf248290f736f9cfed9)) (by Valeriy Malyshev)
- [`UKT-1373`](https://ekoapp.atlassian.net/browse/UKT-1373) - remove isDeleted condition duplication ([`5384b20`](https://gitlab.com/upstra/web/ui-kit/commit/5384b209f07edfe961a73cf088ad532394c6a4c8)) (by Valeriy Malyshev)
- [`UKT-1395`](https://ekoapp.atlassian.net/browse/UKT-1395) - fixed communityId selecting for community search input ([`edf62d6`](https://gitlab.com/upstra/web/ui-kit/commit/edf62d65baa31a383609145a39ad1a3a30446b64)) (by Serhii Ivanenko)

---

## [v1.5.3](https://gitlab.com/upstra/web/ui-kit/compare/v1.5.2...v1.5.3)

#### 16 December 2020

### Commits

- [`UKT-1080`](https://ekoapp.atlassian.net/browse/UKT-1080) - refactored UserSelector component with using Select component; fixed internal state sync for Select and Dropdown; fixed css; added close by Esc for Select ([`9121a1c`](https://gitlab.com/upstra/web/ui-kit/commit/9121a1c5a2155d6345e31a87b327b57c3f8e72e5)) (by Serhii Ivanenko)
- UKT 1372 fix who's not member communities can report post ([`9c82f4a`](https://gitlab.com/upstra/web/ui-kit/commit/9c82f4af45b730fd83dde25c7042e32d2bec16dd)) (by Chaiwat Trisuwan)
- [`UKT-1389`](https://ekoapp.atlassian.net/browse/UKT-1389) - hide "leave community" option for creator ([`5452f6a`](https://gitlab.com/upstra/web/ui-kit/commit/5452f6acec8bc5b29d7fff54d4040fcc7ec2d883)) (by Serhii Ivanenko)
- [`UKT-1376`](https://ekoapp.atlassian.net/browse/UKT-1376) - show "Liked" label if user liked the post ([`88e0be1`](https://gitlab.com/upstra/web/ui-kit/commit/88e0be1c5bac6096a8caca440f36b0c8a926e3a9)) (by Valeriy Malyshev)
- [`UKT-1163`](https://ekoapp.atlassian.net/browse/UKT-1163) - open the newsfeed page by default ([`0aaed1c`](https://gitlab.com/upstra/web/ui-kit/commit/0aaed1cbbf71663ddf7fe482b8bfd1c0b7c99fb3)) (by Valeriy Malyshev)

---

## [v1.5.2](https://gitlab.com/upstra/web/ui-kit/compare/v1.5.1...v1.5.2)

#### 9 December 2020

### Commits

- [Feature] Community edit page [`UKT-994`](https://ekoapp.atlassian.net/browse/UKT-994) ([`2b4a1ef`](https://gitlab.com/upstra/web/ui-kit/commit/2b4a1ef9ac8f7bd35eaaa17b1253f75b61cd9e37)) (by Chris Vibert)
- [`UKT-1375`](https://ekoapp.atlassian.net/browse/UKT-1375) - implemented Select component; refactored Dropdown component to use renderTrigger function ([`765fb90`](https://gitlab.com/upstra/web/ui-kit/commit/765fb909442d34f699b76b516a7957cbc270465a)) (by Serhii Ivanenko)
- [`UKT-1392`](https://ekoapp.atlassian.net/browse/UKT-1392) - uniformising icons in codebase ([`36d44c7`](https://gitlab.com/upstra/web/ui-kit/commit/36d44c730f9ef6b11e07883300ff4c51eacd41e6)) (by Valeriy Malyshev)
- UKT 1179 community profile upload ([`7a5189f`](https://gitlab.com/upstra/web/ui-kit/commit/7a5189fc63349a8998b58bdff60e50082b067ce5)) (by Chaiwat Trisuwan)
- [`UKT-1371`](https://ekoapp.atlassian.net/browse/UKT-1371) - implemented Collapsible component; fixed collapsing for post files amount greater than 5 ([`59db373`](https://gitlab.com/upstra/web/ui-kit/commit/59db373dfc3cdacb502c48c2617d4e483e084d35)) (by Serhii Ivanenko)
- [`UKT-1001`](https://ekoapp.atlassian.net/browse/UKT-1001) - fixed community closing ([`621efb4`](https://gitlab.com/upstra/web/ui-kit/commit/621efb401b18950d9f9d9c8106d4bddc6f70d757)) (by Serhii Ivanenko)
- [`UKT-1050`](https://ekoapp.atlassian.net/browse/UKT-1050) - integrated new input component; added placeholder prop; moved search icon to icons ([`39e4bb5`](https://gitlab.com/upstra/web/ui-kit/commit/39e4bb55c4e2e4d6827bf43a66169cf110ee646d)) (by Serhii Ivanenko)
- [`UKT-1164`](https://ekoapp.atlassian.net/browse/UKT-1164) | stretch out Community column to the bottom of the screen ([`964171e`](https://gitlab.com/upstra/web/ui-kit/commit/964171ec9e045723ae9a560699745190c0e45609)) (by Valeriy Malyshev)
- [`UKT-1369`](https://ekoapp.atlassian.net/browse/UKT-1369) - added notification for report post action ([`87354ac`](https://gitlab.com/upstra/web/ui-kit/commit/87354ac0c892679cc97c3ead342d4a596af9402d)) (by Serhii Ivanenko)
- [`UKT-1250`](https://ekoapp.atlassian.net/browse/UKT-1250) - added optional disabling of scroll by keyboard ([`5820170`](https://gitlab.com/upstra/web/ui-kit/commit/58201703d632fcaae7c753c9feb7838502c79456)) (by Serhii Ivanenko)
- [`UKT-1111`](https://ekoapp.atlassian.net/browse/UKT-1111) | do not allow ant design to override styles ([`7eba4ef`](https://gitlab.com/upstra/web/ui-kit/commit/7eba4efc751f16173ae7405fe329febb60a8157b)) (by Valeriy Malyshev)
- ukt[`-1372`](https://ekoapp.atlassian.net/browse/-1372) fix not member communities can report post ([`84db43b`](https://gitlab.com/upstra/web/ui-kit/commit/84db43bbd62f5fd9281f3f01151f14dfd593c767)) (by Chaiwat Trisuwan)
- [`UKT-1138`](https://ekoapp.atlassian.net/browse/UKT-1138) - fixed layout ([`2654d77`](https://gitlab.com/upstra/web/ui-kit/commit/2654d77d644ad99009b303434ac3414c0d0fbd29)) (by Serhii Ivanenko)
- Use null avatarId as per SDK validation ([`83d3b47`](https://gitlab.com/upstra/web/ui-kit/commit/83d3b4728bf4e8bf66c2b98146bb58872f249dca)) (by cpv123)
- do not move parts of the big components out of the screen boundaries ([`dc78624`](https://gitlab.com/upstra/web/ui-kit/commit/dc7862477cea914c9f47a1e8190808afbdc858a3)) (by Valeriy Malyshev)

---

## [v1.5.1](https://gitlab.com/upstra/web/ui-kit/compare/v1.5.0...v1.5.1)

#### 24 November 2020

### Commits

- [Feat] search autocomplete ([`902f63f`](https://gitlab.com/upstra/web/ui-kit/commit/902f63f08ec06379d71ee6e2ef837108af1b3dda)) (by Julien Barbay)
- [`UKT-1149`](https://ekoapp.atlassian.net/browse/UKT-1149) - implemented dropdown component (replacement for popover); added ui stories; added useActiveElement hook (to detect click outside component) ([`cae9061`](https://gitlab.com/upstra/web/ui-kit/commit/cae906104f0ff94d07c8550dc12f4cf280b77437)) (by Serhii Ivanenko)
- [Fix] Allow clicking user in post header ([`684c1d9`](https://gitlab.com/upstra/web/ui-kit/commit/684c1d9b7328008acdf10476985e68bb6c66c807)) (by Chris Vibert)
- [`UKT-1069`](https://ekoapp.atlassian.net/browse/UKT-1069)-user-can-create-community-without-anycategory ([`7e6bb42`](https://gitlab.com/upstra/web/ui-kit/commit/7e6bb42c2a7de3989857ab176cfcefdd3cc79d16)) (by Chaiwat Trisuwan)
- [Fix] Post target showing on all feeds ([`cb24c50`](https://gitlab.com/upstra/web/ui-kit/commit/cb24c507f2e648a33d27ec128873d2b3c7769271)) (by Chris Vibert)

---

## [v1.5.0](https://gitlab.com/upstra/web/ui-kit/compare/v0.0.19...v1.5.0)

#### 18 November 2020

### Commits

- Remove blockRouteChange logic which was only for edit mode which is now not handled by this component ([`08838d3`](https://gitlab.com/upstra/web/ui-kit/commit/08838d3a6cf0dc98fcec9fb35d72aa8fedfd993f)) (by Chris Vibert)
- [Refactor] Post component ([`8a95a6b`](https://gitlab.com/upstra/web/ui-kit/commit/8a95a6bb0eda6d13440208c7ed94b2210931f5ff)) (by Chris Vibert)
- Allow remove files/image when editing post ([`b4eec6e`](https://gitlab.com/upstra/web/ui-kit/commit/b4eec6e0e5df491e9778029f6b7ead3d3d59337a)) (by Chris Vibert)
- [Component][`ukt-1056`](https://ekoapp.atlassian.net/browse/UKT-1056): Gallery Grid ([`463e63c`](https://gitlab.com/upstra/web/ui-kit/commit/463e63c0749c820b845e34f77bdd170f6597e2d2)) (by Julien Barbay)
- [`UKT-1183`](https://ekoapp.atlassian.net/browse/UKT-1183) Gallery Grid + Image Gallery into Post ([`23fbe39`](https://gitlab.com/upstra/web/ui-kit/commit/23fbe3900f134bd674174a81333bdaf1ab506e4f)) (by Julien Barbay)
- [`UKT-694`](https://ekoapp.atlassian.net/browse/UKT-694) add empty state page when there is no communities ([`37e077c`](https://gitlab.com/upstra/web/ui-kit/commit/37e077cdb05e410b12869ada3ec06aa7b4fb3487)) (by Chaiwat Trisuwan)
- post editor component ([`4fbe351`](https://gitlab.com/upstra/web/ui-kit/commit/4fbe351de1a492b8f89101890e9235ddc8193354)) (by Julien Barbay)
- [Component][`ukt-1183`](https://ekoapp.atlassian.net/browse/UKT-1183) - Image gallery ([`4c6136c`](https://gitlab.com/upstra/web/ui-kit/commit/4c6136cb89926f1a49730383f7d5a6cb5c823236)) (by Julien Barbay)
- [Misc] Input text ([`e6dcb8c`](https://gitlab.com/upstra/web/ui-kit/commit/e6dcb8c9b54bf5671d9e0631383dd2a27e3441ef)) (by Julien Barbay)
- [Fixes] Community create bugs ([`767f53b`](https://gitlab.com/upstra/web/ui-kit/commit/767f53b1635296e886f9379a4060ef157223654a)) (by Chris Vibert)
- [`UKT-1087`](https://ekoapp.atlassian.net/browse/UKT-1087) - added notification and reset files batch when one of files size more than 1GB ([`1270d0f`](https://gitlab.com/upstra/web/ui-kit/commit/1270d0fe2adb9c1097a95d83ab01d56400700e05)) (by Serhii Ivanenko)
- [`UKT-1270`](https://ekoapp.atlassian.net/browse/UKT-1270) - fixed edited label ([`f395f26`](https://gitlab.com/upstra/web/ui-kit/commit/f395f26acc98c703ae1955e4b9223e4e3acc031c)) (by Serhii Ivanenko)
- Temporarily add back post edit styles ([`a68b89f`](https://gitlab.com/upstra/web/ui-kit/commit/a68b89ffee0d6a5e861f7cd5ef0e0d2b6736624d)) (by cpv123)
- Fix public community showing member select ([`dcdffb3`](https://gitlab.com/upstra/web/ui-kit/commit/dcdffb30d12edd7d6a2b3736eb06b6a5a5acbdb9)) (by cpv123)

---

## [v0.0.19](https://gitlab.com/upstra/web/ui-kit/compare/v0.0.18...v0.0.19)

#### 6 November 2020

### Commits

- Specify community search input color ([`ca6de04`](https://gitlab.com/upstra/web/ui-kit/commit/ca6de04c13a79c39b61a3af65a77d14d2411e63c)) (by cpv123)

---

## [v0.0.18](https://gitlab.com/upstra/web/ui-kit/compare/v0.0.17...v0.0.18)

#### 6 November 2020

### Commits

- Fix import path for build ([`deff30b`](https://gitlab.com/upstra/web/ui-kit/commit/deff30badeb94cc242ec720b1627cb7b9991cb49)) (by cpv123)

---

## [v0.0.17](https://gitlab.com/upstra/web/ui-kit/compare/v0.0.16...v0.0.17)

#### 6 November 2020

### Commits

- Revert "Handle community create without category" ([`83aa050`](https://gitlab.com/upstra/web/ui-kit/commit/83aa050a183a283c0891a56c17a5ec17ffded42a)) (by Julien Barbay)
- [Misc] maintenance ([`5601fc4`](https://gitlab.com/upstra/web/ui-kit/commit/5601fc4850cba6d9dc954558104d78f022b8874b)) (by Julien Barbay)
- [Component][`ukt-1113`](https://ekoapp.atlassian.net/browse/UKT-1113): Explore header ([`9f39695`](https://gitlab.com/upstra/web/ui-kit/commit/9f3969576666f5e24d41b5c4067baceb4c634c67)) (by Julien Barbay)
- [Component] UKI[`T-1101`](https://ekoapp.atlassian.net/browse/T-1101) Trending communities list ([`67ac816`](https://gitlab.com/upstra/web/ui-kit/commit/67ac816eeb47291a09766edcd949cdb9942a1461)) (by Chris Vibert)
- [Component][`ukt-1097`](https://ekoapp.atlassian.net/browse/UKT-1097) Communities for category ([`df85a5b`](https://gitlab.com/upstra/web/ui-kit/commit/df85a5b338416184330f4c6bc78a9ce7ac93fa97)) (by Chris Vibert)
- [Component][`ukt-1099`](https://ekoapp.atlassian.net/browse/UKT-1099): Community Card Component ([`c59b1dc`](https://gitlab.com/upstra/web/ui-kit/commit/c59b1dcee24fe172bc1e0fdcc045098766ce0df5)) (by Julien Barbay)
- [Component][`ukt-1103`](https://ekoapp.atlassian.net/browse/UKT-1103): Categories card component ([`a52f4db`](https://gitlab.com/upstra/web/ui-kit/commit/a52f4dbcfe37e1ef31ccec48f1041a11f04e3960)) (by Julien Barbay)
- [Component][`ukt-1098`](https://ekoapp.atlassian.net/browse/UKT-1098): Horizontal List ([`4a66cbe`](https://gitlab.com/upstra/web/ui-kit/commit/4a66cbe73f8ebbf28732e4b67db5981d16eb858c)) (by Julien Barbay)
- [Component][`ukt-1104`](https://ekoapp.atlassian.net/browse/UKT-1104) Explore page ([`4d08800`](https://gitlab.com/upstra/web/ui-kit/commit/4d08800dcc490f288c0fa3b3fb688b375860dee3)) (by Chris Vibert)
- [Hotfix] newsfeed sidemenu ([`589a1f9`](https://gitlab.com/upstra/web/ui-kit/commit/589a1f9c1bc53d92455c49dd01f1b522844e9e66)) (by Julien Barbay)
- [`UKT-1068`](https://ekoapp.atlassian.net/browse/UKT-1068): UI Kit handle undefined value from getFileUrlById ([`2196df1`](https://gitlab.com/upstra/web/ui-kit/commit/2196df1ebbc9ebc7b2f6f302059c96de3cb42c7d)) (by Yevhen Khort)
- [Component][`ukt-1108`](https://ekoapp.atlassian.net/browse/UKT-1108): Recommended Communities List ([`427f5d9`](https://gitlab.com/upstra/web/ui-kit/commit/427f5d9b0df040cfd5e833bb58b9085b58259f06)) (by Julien Barbay)
- Align styles when no children ([`fc6983f`](https://gitlab.com/upstra/web/ui-kit/commit/fc6983f5950fb6bccbc0026a73cde9841ff4d274)) (by cpv123)
- Support file download from posts in feed ([`dea465d`](https://gitlab.com/upstra/web/ui-kit/commit/dea465dfc713687d5f0c3571300abba598882926)) (by cpv123)
- Docs updates and attempt to handle npmrc variable ([`f03abe0`](https://gitlab.com/upstra/web/ui-kit/commit/f03abe0a47619de0e06fb2a30da2fd10e526f732)) (by Yevhen Khort)
- selectedUsers polluted with undefined values ([`87d2b18`](https://gitlab.com/upstra/web/ui-kit/commit/87d2b1823f285c94cbfbc96e7e21961c67f17703)) (by JustBeard)

---

## [v0.0.16](https://gitlab.com/upstra/web/ui-kit/compare/v0.0.15...v0.0.16)

#### 31 October 2020

### Commits

- [Fix] Target selector not updating on change community ([`4c4f46b`](https://gitlab.com/upstra/web/ui-kit/commit/4c4f46be74a49c50d11558cdee4b06d0c61c3f98)) (by Chris Vibert)

---

## [v0.0.15](https://gitlab.com/upstra/web/ui-kit/compare/v0.0.14...v0.0.15)

#### 31 October 2020

### Commits

- [Fix] post target, and a bunch of avatars ([`d421c93`](https://gitlab.com/upstra/web/ui-kit/commit/d421c9316516a83207c43e13ecbe42f0a601899b)) (by Julien Barbay)

---

## [v0.0.14](https://gitlab.com/upstra/web/ui-kit/compare/v0.0.13...v0.0.14)

#### 30 October 2020

### Commits

- [Fix] layout ([`9aa2bc7`](https://gitlab.com/upstra/web/ui-kit/commit/9aa2bc70d5ee3c8f92ea4aa3557f34dbefb7cd6c)) (by Julien Barbay)
- Increase style specificity for display none inputs ([`eb30e5e`](https://gitlab.com/upstra/web/ui-kit/commit/eb30e5e64eb9aa47ce2f2db27e954b1b1e1589b5)) (by cpv123)

---

## [v0.0.13](https://gitlab.com/upstra/web/ui-kit/compare/v0.0.12...v0.0.13)

#### 30 October 2020

### Commits

- [Fix][`ukt-1061`](https://ekoapp.atlassian.net/browse/UKT-1061) : Lower effort to remove mock from User Selector ([`387ee76`](https://gitlab.com/upstra/web/ui-kit/commit/387ee76fe219641f7427b86ecb03066686979e57)) (by Julien Barbay)
- [`UKT-1029`](https://ekoapp.atlassian.net/browse/UKT-1029) - added radios component ([`70b6ff2`](https://gitlab.com/upstra/web/ui-kit/commit/70b6ff20819dbbc2fe9bc355fad338626e845709)) (by Serhii Ivanenko)
- [Fix][`ukt-1064`](https://ekoapp.atlassian.net/browse/UKT-1064): hide avatar upload in community creation form ([`f0382d7`](https://gitlab.com/upstra/web/ui-kit/commit/f0382d700b05cab69911a84f472b3ff32e47499f)) (by Julien Barbay)
- [`UKT-1063`](https://ekoapp.atlassian.net/browse/UKT-1063) - disable post to community from community/user feed ([`696c8f6`](https://gitlab.com/upstra/web/ui-kit/commit/696c8f6ba16980372c7199741ca834364d0a4c4a)) (by Serhii Ivanenko)
- hotfix ([`dc0f496`](https://gitlab.com/upstra/web/ui-kit/commit/dc0f496bac7c75cc328cdf49b83321c7dd2e891c)) (by Serhii Ivanenko)
- adding a fixed prop to allow popovers in modal not to follow scroll ([`5f001d3`](https://gitlab.com/upstra/web/ui-kit/commit/5f001d3e688908c4afa8398ad36d2d9cdbca3187)) (by Julien Barbay)

---

## [v0.0.12](https://gitlab.com/upstra/web/ui-kit/compare/v0.0.11...v0.0.12)

#### 30 October 2020

### Commits

- [`UKT-674`](https://ekoapp.atlassian.net/browse/UKT-674) - fixed community profile page; fixed community settings page; added community update and delete ([`07787d2`](https://gitlab.com/upstra/web/ui-kit/commit/07787d2d0c0d676502e294d10c44396217f52930)) (by Julien Barbay)
- [`UKT-1055`](https://ekoapp.atlassian.net/browse/UKT-1055) - fixed title for community post ([`f92671b`](https://gitlab.com/upstra/web/ui-kit/commit/f92671be3b7d1d1238af7b58b9b1d476038ccce1)) (by Serhii Ivanenko)
- [Fix][`ukt-1046`](https://ekoapp.atlassian.net/browse/UKT-1046) : should show one "comment", many "comments" ([`339b0f2`](https://gitlab.com/upstra/web/ui-kit/commit/339b0f22b25adcdc3604dfe1948779e664c118b0)) (by Julien Barbay)
- Apply max width to post images ([`eb353cb`](https://gitlab.com/upstra/web/ui-kit/commit/eb353cbe158ac3c930f79b5963b315375890eb27)) (by cpv123)
- hotfix/fixed-custom-user-avatar ([`2ff13fa`](https://gitlab.com/upstra/web/ui-kit/commit/2ff13fa91eb58b2c3091491eb3a33b559bca209b)) (by Serhii Ivanenko)

---

## [v0.0.11](https://gitlab.com/upstra/web/ui-kit/compare/v0.0.10...v0.0.11)

#### 30 October 2020

### Commits

- [Misc] maintenance ([`3863ac0`](https://gitlab.com/upstra/web/ui-kit/commit/3863ac005492e3c36b156cbe3447d453401df5f8)) (by Julien Barbay)
- UKT 665 - Implemented file upload ([`d7f283e`](https://gitlab.com/upstra/web/ui-kit/commit/d7f283ecbcf4d5f480ed077e8787995d23b27330)) (by Serhii Ivanenko)
- [`UKT-572`](https://ekoapp.atlassian.net/browse/UKT-572) Create User Profile Page ([`5ee8f4e`](https://gitlab.com/upstra/web/ui-kit/commit/5ee8f4ea67cab0ff584cbaafde2ecb1c8883a886)) (by Chris Vibert)
- Update engagement bar to match UI story behaviour (clicking comments toggles allowing user to close comment compose) ([`007c9cf`](https://gitlab.com/upstra/web/ui-kit/commit/007c9cf80a8fa967ba8ad94a6411510d21a60295)) (by Chris Vibert)
- [Improvement] UI story user profile component ([`2b812fd`](https://gitlab.com/upstra/web/ui-kit/commit/2b812fd60167528718aee072a6556527d6b361d6)) (by Web Developer)
- [`UKT-238`](https://ekoapp.atlassian.net/browse/UKT-238) - added moderator badge for posts by moderator; fixed global feed post compose when post on behalf of community ([`adba34a`](https://gitlab.com/upstra/web/ui-kit/commit/adba34a3670eae25d5731e76d2697e329bcbd31c)) (by Serhii Ivanenko)
- Remove strict check on prop shape (SDK request would fail anywhere if it did not match shape, and it's additional work to keep them aligned between here and SDK) ([`be1d4fd`](https://gitlab.com/upstra/web/ui-kit/commit/be1d4fd7d526ce756c19cf87bc5c39865bf859d4)) (by Chris Vibert)
- UKT 673 - added sdk integration for report user/post ([`208868b`](https://gitlab.com/upstra/web/ui-kit/commit/208868bed0520796e524319c9d4bb1fd8f011494)) (by Serhii Ivanenko)
- [`UKT-1031`](https://ekoapp.atlassian.net/browse/UKT-1031) - fixed default community avatar ([`83b5a73`](https://gitlab.com/upstra/web/ui-kit/commit/83b5a73611319592cbb172b05c48a7af55dfbcf1)) (by Serhii Ivanenko)
- [`UKT-238`](https://ekoapp.atlassian.net/browse/UKT-238) - added moderator badge for posts by moderator; fixed global feed post compose when post on behalf of community ([`fd5d525`](https://gitlab.com/upstra/web/ui-kit/commit/fd5d525b2c9dd393c2b6cc4f6a64e64d37a318a2)) (by Serhii Ivanenko)
- [FIX] Prevent community search crash ([`b2f4b55`](https://gitlab.com/upstra/web/ui-kit/commit/b2f4b5551feecf80ccaebc148695f1de4e3e4da8)) (by Chris Vibert)
- Remove strict check on prop shape (SDK request would fail anywhere if it did not match shape, and it's additional work to keep them aligned between here and SDK) ([`c0cf17d`](https://gitlab.com/upstra/web/ui-kit/commit/c0cf17d83afafafd36060aece610901c4c8b88b2)) (by Julien Barbay)
- [Guide] how to debug eko-sdk problems ([`193dbcf`](https://gitlab.com/upstra/web/ui-kit/commit/193dbcf081fe58b8030ab07dcaeab2b57a71c8a3)) (by Julien Barbay)
- [`UKT-835`](https://ekoapp.atlassian.net/browse/UKT-835) - fixed comments refreshing ([`465ac4c`](https://gitlab.com/upstra/web/ui-kit/commit/465ac4c05dc8f3c5ff1f00732fc26e5082c8061e)) (by Serhii Ivanenko)
- [`UKT-1038`](https://ekoapp.atlassian.net/browse/UKT-1038) - fixed user avatar for comment compose bar ([`0be01e1`](https://gitlab.com/upstra/web/ui-kit/commit/0be01e1e119574c7021df9fd32166a5e06c3f21d)) (by Serhii Ivanenko)
- Disable comment replies ([`06e7b15`](https://gitlab.com/upstra/web/ui-kit/commit/06e7b154b0a18a3d2cf4c10c04aa503a2ef2baa9)) (by cpv123)
- Increase image size to large ([`3a4949e`](https://gitlab.com/upstra/web/ui-kit/commit/3a4949e22a4b3e226568793c1a9c5b49de453801)) (by cpv123)
- add fullscreen mode for QA ([`fbb3019`](https://gitlab.com/upstra/web/ui-kit/commit/fbb3019aba964e57a81839604edd99384b4226a3)) (by Julien Barbay)
- [`UKT-1035`](https://ekoapp.atlassian.net/browse/UKT-1035) - fixed default avatar for post creator dropdown ([`2c3a995`](https://gitlab.com/upstra/web/ui-kit/commit/2c3a9955a5e59db784e9ec4b58775c1cb434e0e2)) (by Serhii Ivanenko)
- [`UKT-1028`](https://ekoapp.atlassian.net/browse/UKT-1028) - fixed another users profile page ([`8ff25c7`](https://gitlab.com/upstra/web/ui-kit/commit/8ff25c701939801ae180b5948a6f2c0b9ecb9ddc)) (by Serhii Ivanenko)
- Change user feed to global feed for NewsFeed ([`3e69558`](https://gitlab.com/upstra/web/ui-kit/commit/3e69558790dbe54e6eb8944b83f6d4b07bac61cd)) (by cpv123)
- UKT 710 - fixed text ([`48a96de`](https://gitlab.com/upstra/web/ui-kit/commit/48a96deb90af75a6961652da6403b2ac787bf2ac)) (by Serhii Ivanenko)

---

## [v0.0.10](https://gitlab.com/upstra/web/ui-kit/compare/v0.0.9...v0.0.10)

#### 26 October 2020

### Commits

- UKT 662 - Implemented image upload and post image creation ([`7b0ef72`](https://gitlab.com/upstra/web/ui-kit/commit/7b0ef7233fe41445af30fc4188583a431dc571fb)) (by Serhii Ivanenko)
- [`UKT-820`](https://ekoapp.atlassian.net/browse/UKT-820) - hide post compose bar in edit mode ([`0d41017`](https://gitlab.com/upstra/web/ui-kit/commit/0d41017b5ba726fbe182139b32bfeabbb7bde9a9)) (by Serhii Ivanenko)

---

## [v0.0.9](https://gitlab.com/upstra/web/ui-kit/compare/v0.0.8...v0.0.9)

#### 19 October 2020

### Commits

- Community Side Menu component with SDK ([`5496b80`](https://gitlab.com/upstra/web/ui-kit/commit/5496b801896ef8fc13c3464838984d2f3c1b0db9)) (by Chris Vibert)
- Community members SDK component ([`995c5c9`](https://gitlab.com/upstra/web/ui-kit/commit/995c5c91442649a80580d12971fd774f887635e2)) (by Chris Vibert)
- Community info component SDK ([`497f165`](https://gitlab.com/upstra/web/ui-kit/commit/497f165e67193140dad0459d7af95811db1a220b)) (by Chris Vibert)
- Community v2 component for Eko Green ([`7fded38`](https://gitlab.com/upstra/web/ui-kit/commit/7fded3883e14adefc6dfe6855e026b855ad9a08f)) (by Chris Vibert)
- Make Feed stories consistent (use SDK mock hooks) ([`a800bd8`](https://gitlab.com/upstra/web/ui-kit/commit/a800bd89d8809dcbe3abcc0d8915541a5f7f18f2)) (by cpv123)

---

## [v0.0.8](https://gitlab.com/upstra/web/ui-kit/compare/v0.0.7...v0.0.8)

#### 14 October 2020

### Commits

- SDK upgrade and fixes after EkoGreen beta ([`9d346e7`](https://gitlab.com/upstra/web/ui-kit/commit/9d346e756dcc443e729eac6818669ac73c54ace1)) (by Chris Vibert)
- Add eko-sdk as dependency instead of bundling ([`e63415e`](https://gitlab.com/upstra/web/ui-kit/commit/e63415ec4b5137aa7095c340ea56c0f7f0a67782)) (by cpv123)
- add simple progress bar and time story ([`d155237`](https://gitlab.com/upstra/web/ui-kit/commit/d15523716dcdf3687932804f31dcb104b5e9a0c8)) (by Chaiwat Trisuwan)
- runtime/compiled confusion ([`b260683`](https://gitlab.com/upstra/web/ui-kit/commit/b260683e13ed5ffe2e3460c83bd7c88f61f6f7a3)) (by Julien Barbay)
- [Hotfix] Avoid reconnections ([`9bb1381`](https://gitlab.com/upstra/web/ui-kit/commit/9bb13811d79906b1a97f82cd9bac75cd5ee160cc)) (by Julien Barbay)

---

## [v0.0.7](https://gitlab.com/upstra/web/ui-kit/compare/v0.0.6...v0.0.7)

#### 7 October 2020

### Commits

- Remove notifications from pipeline (upgrade to webhooks) ([`641429e`](https://gitlab.com/upstra/web/ui-kit/commit/641429e83752f6fc46acb808272841439bd31bd2)) (by Julien Barbay)
- not exposing private functions in build. using it only in storybook ([`9b569c0`](https://gitlab.com/upstra/web/ui-kit/commit/9b569c09b1f38b9300206d9e24a1f0b7bb46ab01)) (by Julien Barbay)
- Update .gitlab-ci.yml ([`8eb3c58`](https://gitlab.com/upstra/web/ui-kit/commit/8eb3c580dc20382375840cd4f2732712e4282ab5)) (by Julien Barbay)
- Update .gitlab-ci.yml ([`b5f0912`](https://gitlab.com/upstra/web/ui-kit/commit/b5f0912c447a29feb97548db2e0e855287914d7a)) (by Julien Barbay)

---

## [v0.0.6](https://gitlab.com/upstra/web/ui-kit/compare/v0.0.5...v0.0.6)

#### 2 October 2020

### Commits

- [Misc] reorganization ([`be23466`](https://gitlab.com/upstra/web/ui-kit/commit/be2346672bcccaaa02224b2b14aa1e2ef8049511)) (by Julien Barbay)
- SDK integration for feed and posts ([`1cd6de6`](https://gitlab.com/upstra/web/ui-kit/commit/1cd6de6092d7f492841aa17298e4d103d41f685f)) (by Chris Vibert)
- [Misc] storybook to support user switch ([`a880748`](https://gitlab.com/upstra/web/ui-kit/commit/a8807486691c3ef1425813d44b2966db23748deb)) (by Julien Barbay)
- [`UKT-573`](https://ekoapp.atlassian.net/browse/UKT-573) - added profile bar; refactored profile page for communities and users; refactored icons; added story for icons ([`8422e1f`](https://gitlab.com/upstra/web/ui-kit/commit/8422e1fc8cbf0cda690b8b67070f3a0f186cb861)) (by Serhii Ivanenko)
- refactoring of file icons ([`2aaa535`](https://gitlab.com/upstra/web/ui-kit/commit/2aaa5357a920947fac526b2a65443c6adaa70485)) (by Julien Barbay)
- UPSTRA[`-1285`](https://ekoapp.atlassian.net/browse/-1285) - added settings page; added conditional render pattern; added constants; added back link component ([`da9bdc6`](https://gitlab.com/upstra/web/ui-kit/commit/da9bdc6fa205b922e9673010b03a7820bb76faba)) (by Serhii Ivanenko)
- [Misc] fix build ([`c7e7600`](https://gitlab.com/upstra/web/ui-kit/commit/c7e76001808b5eea897766d0258f6f5af98407d0)) (by Julien Barbay)
- [`UKT-645`](https://ekoapp.atlassian.net/browse/UKT-645) - added missed private icon ([`189cf2f`](https://gitlab.com/upstra/web/ui-kit/commit/189cf2ff57b52fddda48e13afb2c1e7fc3574ac4)) (by Serhii Ivanenko)
- [`UKT-350`](https://ekoapp.atlassian.net/browse/UKT-350) - not show loading state in editing mode ([`8cd859b`](https://gitlab.com/upstra/web/ui-kit/commit/8cd859b3438d3d113881bb0779b37583a70c4fae)) (by Serhii Ivanenko)
- UKT 372 - added placeholder icons; fixed layout ([`e1fe870`](https://gitlab.com/upstra/web/ui-kit/commit/e1fe8703c57029d0034d87f6216f634c7ba2e22b)) (by Serhii Ivanenko)
- [`UKT-573`](https://ekoapp.atlassian.net/browse/UKT-573) - added profile bar; refactored profile page for communities and users; refactored icons; added story for icons ([`2b8a606`](https://gitlab.com/upstra/web/ui-kit/commit/2b8a606bb20b255fc6d4f879b55926998c935247)) (by Serhii Ivanenko)
- [Feature][`ukt-507`](https://ekoapp.atlassian.net/browse/UKT-507): small components to stories (tab component) ([`8da8e3d`](https://gitlab.com/upstra/web/ui-kit/commit/8da8e3db170ac7ec527a61a5ebc7d3688134cae5)) (by Chaiwat Trisuwan)
- [Component] User header ([`748a6c3`](https://gitlab.com/upstra/web/ui-kit/commit/748a6c3ddc32bbf9d2cb750457e508e3eea77335)) (by Julien Barbay)
- UKT 370 - fixed empty feed layout ([`ca508fb`](https://gitlab.com/upstra/web/ui-kit/commit/ca508fb07e7e2437e15640f1a3e17257100c68c0)) (by Serhii Ivanenko)
- [`UKT-356`](https://ekoapp.atlassian.net/browse/UKT-356) - replaced progress bar with loading overlay ([`d0da94d`](https://gitlab.com/upstra/web/ui-kit/commit/d0da94df1af8632e92bd8947f172dff152777ce1)) (by Serhii Ivanenko)
- UPSTRA[`-1285`](https://ekoapp.atlassian.net/browse/-1285) - fixed according to code review ([`9dd105b`](https://gitlab.com/upstra/web/ui-kit/commit/9dd105bef181300ba465bf605a39e2579cfb5f1d)) (by Serhii Ivanenko)
- UKT 275 - added confirmation on page changing if post is dirty ([`d96a4f3`](https://gitlab.com/upstra/web/ui-kit/commit/d96a4f3e7bd72441b99045cc7d61706c1368b074)) (by Serhii Ivanenko)
- UPSTRA[`-1285`](https://ekoapp.atlassian.net/browse/-1285) - added confirmation for closing community; added modal for add members form ([`7ed5e30`](https://gitlab.com/upstra/web/ui-kit/commit/7ed5e30779641e974391f97bbe3e3a693fc37c22)) (by Serhii Ivanenko)
- UPSTRA[`-1289`](https://ekoapp.atlassian.net/browse/-1289) - replaced deprecated library ([`484359c`](https://gitlab.com/upstra/web/ui-kit/commit/484359cd9601f715cd410f1f7e975c558851a47e)) (by Serhii Ivanenko)
- [`UKT-573`](https://ekoapp.atlassian.net/browse/UKT-573) - added profile bar; refactored profile page for communities and users; refactored icons; added story for icons ([`3118ac5`](https://gitlab.com/upstra/web/ui-kit/commit/3118ac5eb1ddbec81d677419a26d8a01f3f5b0c8)) (by Serhii Ivanenko)
- [`UKT-680`](https://ekoapp.atlassian.net/browse/UKT-680) - fixed layout ([`c85039f`](https://gitlab.com/upstra/web/ui-kit/commit/c85039f930bff4558a154f2a9235f4a7c257695d)) (by Serhii Ivanenko)
- UPSTRA[`-1289`](https://ekoapp.atlassian.net/browse/-1289) - added infinite scroll; replaced prev. infinite scroll component with more modern; added mock method for load more posts ([`88e0ba4`](https://gitlab.com/upstra/web/ui-kit/commit/88e0ba46ebd8974f24129d20d8509f86aec6329d)) (by Serhii Ivanenko)
- UPSTRA[`-1288`](https://ekoapp.atlassian.net/browse/-1288) - added search input for community search to feed menu ([`22ea4c5`](https://gitlab.com/upstra/web/ui-kit/commit/22ea4c515564ba7d32b9743e08775035aae61472)) (by Serhii Ivanenko)
- [`UKT-682`](https://ekoapp.atlassian.net/browse/UKT-682) - fixed asterisk color for label marked as required ([`f661540`](https://gitlab.com/upstra/web/ui-kit/commit/f661540210c9a00679ca9ad33cba5ef9fcce12e6)) (by Serhii Ivanenko)
- [Misc] Use DefinePlugin in build ([`2a3a02b`](https://gitlab.com/upstra/web/ui-kit/commit/2a3a02b68ffca51909f5694f2dec9c2792173df4)) (by Julien Barbay)
- [Misc] Initialise SDK from props and use env variable for API key ([`d9805e1`](https://gitlab.com/upstra/web/ui-kit/commit/d9805e1e81607f8e23ef39db9ae0c44847fee3e8)) (by Chris Vibert)
- UPSTRA[`-1288`](https://ekoapp.atlassian.net/browse/-1288) - fixed according to code review (not pass width anymore, pass classname instead) ([`a4362f3`](https://gitlab.com/upstra/web/ui-kit/commit/a4362f3e41821009108ee68d19c0abafc52be01a)) (by Serhii Ivanenko)
- update CI/CD scripts ([`60ef193`](https://gitlab.com/upstra/web/ui-kit/commit/60ef193de9e3221f005f39f772f925c189b7fc8e)) (by Julien Barbay)
- fixing rebase ([`1874ae1`](https://gitlab.com/upstra/web/ui-kit/commit/1874ae10e65bda4593dd0adb8221229aa62bbe64)) (by Julien Barbay)
- fix-post-compose-bar - fixed conflicts ([`861ab86`](https://gitlab.com/upstra/web/ui-kit/commit/861ab86887e5da5d8aba1d4deb43b4a3e79fb3a7)) (by Serhii Ivanenko)
- Update to use new theme palette object ([`14c7148`](https://gitlab.com/upstra/web/ui-kit/commit/14c7148d23c5d50c3b421b15660ea6d1f47400d1)) (by cpv123)
- [`UKT-687`](https://ekoapp.atlassian.net/browse/UKT-687) - added redirect on create new community ([`63f33d2`](https://gitlab.com/upstra/web/ui-kit/commit/63f33d2369137c6c93bd3ed3169705ed71b2b6a9)) (by Serhii Ivanenko)
- UPSTRA[`-1285`](https://ekoapp.atlassian.net/browse/-1285) - added submit for add members modal ([`152ef87`](https://gitlab.com/upstra/web/ui-kit/commit/152ef874479cffc6f66c42745a555482c10897eb)) (by Serhii Ivanenko)
- fixed text reset; refactored conditionally rendered components ([`9a837b1`](https://gitlab.com/upstra/web/ui-kit/commit/9a837b1aa60c8beefd4754ae8b32f2f61ebadae4)) (by Serhii Ivanenko)
- UPSTRA[`-1289`](https://ekoapp.atlassian.net/browse/-1289) - returned prev. infinite scroll for chat message component ([`7ace728`](https://gitlab.com/upstra/web/ui-kit/commit/7ace7287a92d56c0e0cdb52113476cdc5187b277)) (by Serhii Ivanenko)
- [`UKT-690`](https://ekoapp.atlassian.net/browse/UKT-690) - removed validation on duplicate community name ([`1482d6b`](https://gitlab.com/upstra/web/ui-kit/commit/1482d6bae1943a7bdf75442ca6bf821f441e7d08)) (by Serhii Ivanenko)
- fixed user dropdown opening ([`4117d9e`](https://gitlab.com/upstra/web/ui-kit/commit/4117d9e29237519cb5657e624ff074c1c43c5d1d)) (by Serhii Ivanenko)
- hotfix build ([`91c4a07`](https://gitlab.com/upstra/web/ui-kit/commit/91c4a072f398574ce87961e5be021bb2282b601b)) (by Julien Barbay)
- [`UKT-467`](https://ekoapp.atlassian.net/browse/UKT-467) - added auto focus for comment input ([`b745ca5`](https://gitlab.com/upstra/web/ui-kit/commit/b745ca5cfdfdd6eb79e8effb1dd9aeb09155d336)) (by Serhii Ivanenko)
- UPSTRA[`-1285`](https://ekoapp.atlassian.net/browse/-1285) - added settings page; added conditional render pattern; added constants; added back link component ([`2606720`](https://gitlab.com/upstra/web/ui-kit/commit/2606720802dcbd56ec5c1ef1a226755786a485b4)) (by Serhii Ivanenko)
- [`UKT-686`](https://ekoapp.atlassian.net/browse/UKT-686) - now show empty popup if all users are selected ([`ff9e122`](https://gitlab.com/upstra/web/ui-kit/commit/ff9e122d127fc1f7c20e7737fab21e11e38e48b2)) (by Serhii Ivanenko)
- UPSTRA[`-1285`](https://ekoapp.atlassian.net/browse/-1285) - added remove community action ([`f0cd3c3`](https://gitlab.com/upstra/web/ui-kit/commit/f0cd3c3f218a1c021ea48b54a85d39a6b4207fd4)) (by Serhii Ivanenko)
- UPSTRA[`-1285`](https://ekoapp.atlassian.net/browse/-1285) - fixed according to code review ([`1ece374`](https://gitlab.com/upstra/web/ui-kit/commit/1ece374b87010342f25f82737217b5658e5a3532)) (by Serhii Ivanenko)
- [`UKT-681`](https://ekoapp.atlassian.net/browse/UKT-681) - show error on create community name contains of spaces only ([`596da4b`](https://gitlab.com/upstra/web/ui-kit/commit/596da4b74df720d0bb6ef1fb240130ba913cac18)) (by Serhii Ivanenko)
- [`UKT-465`](https://ekoapp.atlassian.net/browse/UKT-465) - added replies amount to comments counter ([`cdbc4f0`](https://gitlab.com/upstra/web/ui-kit/commit/cdbc4f044201162735a15fd3c12e77981950aa34)) (by Serhii Ivanenko)
- UPSTRA[`-1285`](https://ekoapp.atlassian.net/browse/-1285) - fixed form initialization ([`0c0edd5`](https://gitlab.com/upstra/web/ui-kit/commit/0c0edd52213bb989c75585f2df04d900f80ab95c)) (by Serhii Ivanenko)
- UPSTRA[`-1288`](https://ekoapp.atlassian.net/browse/-1288) - fixed according to code review ([`d6ffd5f`](https://gitlab.com/upstra/web/ui-kit/commit/d6ffd5f083a1ea6b73d272eaf98700ed76917c66)) (by Serhii Ivanenko)
- [`UKT-696`](https://ekoapp.atlassian.net/browse/UKT-696) - fixed typo ([`1d1e48b`](https://gitlab.com/upstra/web/ui-kit/commit/1d1e48bf944c59752ec00f14bffebab76735ac0c)) (by Serhii Ivanenko)
- [`UKT-688`](https://ekoapp.atlassian.net/browse/UKT-688) - fixed work break ([`59d103f`](https://gitlab.com/upstra/web/ui-kit/commit/59d103fd50d464f3db200d46ddfec66ccd22694b)) (by Serhii Ivanenko)
- UPSTRA[`-1285`](https://ekoapp.atlassian.net/browse/-1285) - fixed conflict ([`5e107a0`](https://gitlab.com/upstra/web/ui-kit/commit/5e107a015b5b94eb7e894838e537a5b5d306984e)) (by Serhii Ivanenko)
- UPSTRA[`-1285`](https://ekoapp.atlassian.net/browse/-1285) - fixed conflict ([`232f63b`](https://gitlab.com/upstra/web/ui-kit/commit/232f63ba2b678338df1ee0bf73739944bc25474a)) (by Serhii Ivanenko)
- UPSTRA[`-1288`](https://ekoapp.atlassian.net/browse/-1288) - made idea files untracked ([`39ac609`](https://gitlab.com/upstra/web/ui-kit/commit/39ac6094281309ec29f6ea1c4dbd408cdadc772c)) (by Serhii Ivanenko)
- TODO comment for .git directory in gitlab artifact ([`a4e54be`](https://gitlab.com/upstra/web/ui-kit/commit/a4e54be4d84432ee3b0c1b32e2a3990d0fe6b00d)) (by cpv123)

---

## [v0.0.5](https://gitlab.com/upstra/web/ui-kit/compare/v0.0.4...v0.0.5)

#### 23 September 2020

### Commits

- Add missing classnames dependency ([`9a07c2d`](https://gitlab.com/upstra/web/ui-kit/commit/9a07c2dc78218e164a4bf03c63ea45b267f2a9be)) (by cpv123)

---

## [v0.0.4]()

#### 23 September 2020

### Commits

- react rollup storybook styled-components setup ([`6a5ee87`](https://gitlab.com/upstra/web/ui-kit/commit/6a5ee87048a65d326295f60203bbfafdb492fa3f)) (by Aidar Lukmanov)
- explore page ([`8b96a43`](https://gitlab.com/upstra/web/ui-kit/commit/8b96a432c8fa79b0faa59a7cb454b93c68ca4c1c)) (by Aidar Lukmanov)
- Update package lock after removing unused deps ([`4d2f53a`](https://gitlab.com/upstra/web/ui-kit/commit/4d2f53ad69963f80695d1ea44037f7088c8f4d3c)) (by cpv123)
- move from ts to js, change bundler from rollup to webpack ([`bbd2e14`](https://gitlab.com/upstra/web/ui-kit/commit/bbd2e1442fabff924d2a63a2eb261a410201bd8b)) (by Aidar Lukmanov)
- Setup Eko React eslint rules with auto-linting ([`bc093c6`](https://gitlab.com/upstra/web/ui-kit/commit/bc093c6fc7671a6a8b4a5c27c226b83304dec0af)) (by cpv123)
- add layout side menu and header ([`ccb2fd8`](https://gitlab.com/upstra/web/ui-kit/commit/ccb2fd84471a4365fac9270f6276309318928720)) (by chaiwattsw)
- community-creation ([`06e65ae`](https://gitlab.com/upstra/web/ui-kit/commit/06e65aeb2238fde23fb639f17db80c085b3bc2fe)) (by Aidar Lukmanov)
- Fix importing of external CSS ([`3b61836`](https://gitlab.com/upstra/web/ui-kit/commit/3b61836a4bab63309378f39056a22109ff64b605)) (by cpv123)
- bugfixes ([`23329b8`](https://gitlab.com/upstra/web/ui-kit/commit/23329b8bd3e93a734b6da46fe7e7b3e13d279e74)) (by Aidar Lukmanov)
- pack app with pkg as application for easy build testing ([`a4994a8`](https://gitlab.com/upstra/web/ui-kit/commit/a4994a814aefdeda7fb0b91857d2541b446bfc5a)) (by Aidar Lukmanov)
- Update chat ui ([`fd01a7f`](https://gitlab.com/upstra/web/ui-kit/commit/fd01a7fe48aff5b7a857c1c79209ce7670885d76)) (by Aidar Lukmanov)
- fixing back storybook plugins ([`75ac596`](https://gitlab.com/upstra/web/ui-kit/commit/75ac59691962a869b129a2e57c25e4a4e7169769)) (by Julien Barbay)
- Run auto-lint ([`6bef0a5`](https://gitlab.com/upstra/web/ui-kit/commit/6bef0a522a8ef1f673da2d53403358883b99ac21)) (by cpv123)
- separate mock data ([`21508ec`](https://gitlab.com/upstra/web/ui-kit/commit/21508ecfb23627736e87c54ccd12dceee464dfa8)) (by Aidar Lukmanov)
- Files attachments ([`2609991`](https://gitlab.com/upstra/web/ui-kit/commit/260999191dd0e094a64c629209b31d60a2337f83)) (by Aidar Lukmanov)
- Community page ui ([`a0fd22b`](https://gitlab.com/upstra/web/ui-kit/commit/a0fd22bb33d4d1142e4e45ee3b21c69f77dc73a2)) (by Aidar Lukmanov)
- Manually fix lint errors ([`4c45740`](https://gitlab.com/upstra/web/ui-kit/commit/4c457404cc31ba7b1cd61af0a418f2e04058b329)) (by cpv123)
- draft ([`dd8c0a6`](https://gitlab.com/upstra/web/ui-kit/commit/dd8c0a62a95a3d35c4cc8e88c0b94e4655fb233d)) (by Aidar Lukmanov)
- message flaggins and editing ([`2e4bd01`](https://gitlab.com/upstra/web/ui-kit/commit/2e4bd01a948403ae6541d99476f6d39eb70b564a)) (by Aidar Lukmanov)
- Post compose and post ([`2616de3`](https://gitlab.com/upstra/web/ui-kit/commit/2616de3f8974fd3cddc8a27aa06ff7fd0ec0f573)) (by Aidar Lukmanov)
- rename components ([`0fc0d81`](https://gitlab.com/upstra/web/ui-kit/commit/0fc0d8168d769efc33e32e575bcc3535b1596754)) (by Aidar Lukmanov)
- Function to build global theme ([`cb4a662`](https://gitlab.com/upstra/web/ui-kit/commit/cb4a66281c62267a6309f12c9e529718e579af2c)) (by cpv123)
- Add theme setup and Upstra logo to storybook ([`e7eb993`](https://gitlab.com/upstra/web/ui-kit/commit/e7eb993c93699586428e921bb467cf716f0e0ea3)) (by cpv123)
- message list, and customization ([`54053e9`](https://gitlab.com/upstra/web/ui-kit/commit/54053e939fc459fa4d5e55ddab23033d173e5ec0)) (by Aidar Lukmanov)
- All components into 'components' directory ([`5e57e5d`](https://gitlab.com/upstra/web/ui-kit/commit/5e57e5d527f2798fe2546f9a385b218e37f49e04)) (by cpv123)
- Create function to build typography theme ([`8ec43b3`](https://gitlab.com/upstra/web/ui-kit/commit/8ec43b34fac00535a8631d5a77a8508c80ff6980)) (by cpv123)
- fixes and refactoring of post and common components ([`931290b`](https://gitlab.com/upstra/web/ui-kit/commit/931290bec4a1b1ff4823661eba58977da466eb70)) (by Aidar Lukmanov)
- restyle community page(change header and move community info on right hand side) ([`3bd2cb8`](https://gitlab.com/upstra/web/ui-kit/commit/3bd2cb81e34a2076a7035bd596cfa16323b0373e)) (by Aidar Lukmanov)
- new message styles ([`9ec65c6`](https://gitlab.com/upstra/web/ui-kit/commit/9ec65c68b16368ceea61c497a7948d184c5d247f)) (by Aidar Lukmanov)
- add image gallery ([`9bb9849`](https://gitlab.com/upstra/web/ui-kit/commit/9bb98498de652a508187686495451742e110f12f)) (by Aidar Lukmanov)
- theme colors ([`746a4cc`](https://gitlab.com/upstra/web/ui-kit/commit/746a4cc566784378fc99f7fec3e20410ee395938)) (by Aidar Lukmanov)
- mock file upload ([`202e36b`](https://gitlab.com/upstra/web/ui-kit/commit/202e36b2d1c64429dc9b435aa475cb8db067b55c)) (by Aidar Lukmanov)
- add storybook/addon-knobs ([`61c039d`](https://gitlab.com/upstra/web/ui-kit/commit/61c039d3516997b4e1a93c4caa283a2f54372e02)) (by chaiwattsw)
- remove knobs addon from dev dependencies ([`21cb633`](https://gitlab.com/upstra/web/ui-kit/commit/21cb633acdd4f05b4c286d92b98e7bf87f953adb)) (by chaiwattsw)
- Use alias imports for components ([`74131bb`](https://gitlab.com/upstra/web/ui-kit/commit/74131bbf0bf3c5758e141afca20c71db2eb07303)) (by cpv123)
- add storybook knobs addon ([`65d9799`](https://gitlab.com/upstra/web/ui-kit/commit/65d9799013fdec458bc383b85de01f8be20e6422)) (by chaiwattsw)
- add storybook controls ([`c397f76`](https://gitlab.com/upstra/web/ui-kit/commit/c397f7619d57588a8580c2677fa5297c7798dc65)) (by chaiwattsw)
- add storybook/addon-controls ([`2dba83d`](https://gitlab.com/upstra/web/ui-kit/commit/2dba83d8968400ba6289741f148a2b0a09a675c3)) (by chaiwattsw)
- add storybook/addon-actions ([`fa70f98`](https://gitlab.com/upstra/web/ui-kit/commit/fa70f98b9c629f0cef8d2b32f50660d636d7a90d)) (by chaiwattsw)
- add storybook actions addon ([`271cc7c`](https://gitlab.com/upstra/web/ui-kit/commit/271cc7c2fed689858540aa879ba2a326701692e7)) (by chaiwattsw)
- Move external modules to dev dependencies so that they are not installed ([`ee8b9cf`](https://gitlab.com/upstra/web/ui-kit/commit/ee8b9cfddd19cb2a3393b4be46411b50680e44a1)) (by cpv123)
- add storybook/addon-a11y ([`d5d74cd`](https://gitlab.com/upstra/web/ui-kit/commit/d5d74cdf48453921afec77280481674505305cec)) (by chaiwattsw)
- add storybook a11y addon ([`9a003bb`](https://gitlab.com/upstra/web/ui-kit/commit/9a003bbae89cb5f3a9ce29c3f1dbbe283eb5c75c)) (by chaiwattsw)
- limit images and files number, make post author variable, add post as community ([`422034a`](https://gitlab.com/upstra/web/ui-kit/commit/422034a2ca0e52fe9bef6fed3a4899d7913bf704)) (by Aidar Lukmanov)
- Use alias imports for hooks, hocs and mock ([`f3052d1`](https://gitlab.com/upstra/web/ui-kit/commit/f3052d1e63a3901e369655fca8af21c9bd019ae8)) (by cpv123)
- ui kit provider and examples ([`e897bb8`](https://gitlab.com/upstra/web/ui-kit/commit/e897bb84dd17b69057876cdd3b694b416eb3b44e)) (by Aidar Lukmanov)
- notifications ([`4e78c80`](https://gitlab.com/upstra/web/ui-kit/commit/4e78c807b64ca22d3ff8c7251e63bfce1b09edc7)) (by Aidar Lukmanov)
- adjust styles, add chat header ([`2c0e5f0`](https://gitlab.com/upstra/web/ui-kit/commit/2c0e5f0925baeb3d051c86e7daf540e0652f85a5)) (by Aidar Lukmanov)
- Fix and tidy tests for theme builder functions ([`7de26f6`](https://gitlab.com/upstra/web/ui-kit/commit/7de26f63476d9e3211a09ba7c24b3a69932336cf)) (by cpv123)
- Replace all theme.color with theme.palette ([`74b4e46`](https://gitlab.com/upstra/web/ui-kit/commit/74b4e4608d0cef39ab86563978ec36737309375d)) (by cpv123)
- Implement new theme builder into ui-kit Provider component ([`259b177`](https://gitlab.com/upstra/web/ui-kit/commit/259b177afe6e09014778309f8c904f04f34dc7a6)) (by cpv123)
- add storybook viewport addon ([`7856c44`](https://gitlab.com/upstra/web/ui-kit/commit/7856c4454ee1bd9d14a56080cd40e857c44f1fea)) (by chaiwattsw)
- Use new color names ([`cbcccea`](https://gitlab.com/upstra/web/ui-kit/commit/cbccceaa3751dfe580e5448aec3f1f407383136a)) (by cpv123)
- add storybook/addon-viewport ([`c722fc8`](https://gitlab.com/upstra/web/ui-kit/commit/c722fc8f890287398246e2cad2303578490e5355)) (by chaiwattsw)
- Add Switch story with actions ([`68a78bb`](https://gitlab.com/upstra/web/ui-kit/commit/68a78bb7912e7eecff9390c5e076df60f6518f7b)) (by cpv123)
- Add webpack bundle analyzer ([`33e5081`](https://gitlab.com/upstra/web/ui-kit/commit/33e50811e7d5d0736676caf7bc790df13c9a0c00)) (by cpv123)
- Remove old storybook build process for running build locally ([`cf8e67e`](https://gitlab.com/upstra/web/ui-kit/commit/cf8e67ecb6001f6b4b490469893f933996188a23)) (by cpv123)
- Rename hoks to hocs ([`59f5e6e`](https://gitlab.com/upstra/web/ui-kit/commit/59f5e6e78b13fa489bb3aede408c441cb4a0acbb)) (by cpv123)
- simplify customization, fix recursive rendering for nested components inside of customized one ([`3f854b5`](https://gitlab.com/upstra/web/ui-kit/commit/3f854b55e35e4b75b5f70b78776963d494282461)) (by Aidar Lukmanov)
- Add story for color picker to see how shades vary ([`83951a6`](https://gitlab.com/upstra/web/ui-kit/commit/83951a61ea23ae9da7c9ef8a7c7e2232e1221d20)) (by cpv123)
- fix colors, add comments ([`0f23083`](https://gitlab.com/upstra/web/ui-kit/commit/0f23083bc84026656d26712f718142dcf609e750)) (by Aidar Lukmanov)
- Set up webpack aliases for importing ([`c2e6eb6`](https://gitlab.com/upstra/web/ui-kit/commit/c2e6eb684deb0ea69d3ef0b11074234745b8cd22)) (by cpv123)
- add Confirm component and confirm function ([`e5df5d6`](https://gitlab.com/upstra/web/ui-kit/commit/e5df5d60fbe88149931936f7e24758ee51d88bf8)) (by Aidar Lukmanov)
- Move provider in storybook decorator, initialize client inside provider ([`ca1d9d3`](https://gitlab.com/upstra/web/ui-kit/commit/ca1d9d3eefc89dfac4a3c6fc97bce143f79a5052)) (by Aidar Lukmanov)
- Add Modal component ([`74205b5`](https://gitlab.com/upstra/web/ui-kit/commit/74205b5ccf410cdc44863c28230f6f243a234b71)) (by Aidar Lukmanov)
- example of sdk usage ([`297b061`](https://gitlab.com/upstra/web/ui-kit/commit/297b0613b28b4c526f504fe138e2a415146ecb04)) (by Aidar Lukmanov)
- CD for develop branch ([`9b049c7`](https://gitlab.com/upstra/web/ui-kit/commit/9b049c7e1a5790cb6188ce6379863aeb41c7b104)) (by Julien Barbay)
- fix dependencies ([`4b484ef`](https://gitlab.com/upstra/web/ui-kit/commit/4b484ef7a5380860d89ada2b48d987b6a7b7b22e)) (by Aidar Lukmanov)
- setup per pr build ([`671cc40`](https://gitlab.com/upstra/web/ui-kit/commit/671cc40cbad904e555b4ce532e813f007ebbe193)) (by Julien Barbay)
- Create custom switch component ([`140194a`](https://gitlab.com/upstra/web/ui-kit/commit/140194ace6c1162bca7387fd10c65a65792cd378)) (by cpv123)
- refactoring button and story ([`cfe7b47`](https://gitlab.com/upstra/web/ui-kit/commit/cfe7b47be54d031f923f9a06b19304b7a0993459)) (by Julien Barbay)
- factorize size property ([`fcdcd8d`](https://gitlab.com/upstra/web/ui-kit/commit/fcdcd8d9b3cbf672eec0fac299d429fd9607ba65)) (by Julien Barbay)
- Replace react-toggle with custom Switch component ([`42e2015`](https://gitlab.com/upstra/web/ui-kit/commit/42e201571412fc7c840283880dfc72250ea89f24)) (by cpv123)
- restyle chat items in recents menu, use side minu item as base ([`dc4c82e`](https://gitlab.com/upstra/web/ui-kit/commit/dc4c82eedb11c4e7defc8d93f4cddd51b74327f7)) (by Aidar Lukmanov)
- hide files in post if &gt; 5 ([`de07988`](https://gitlab.com/upstra/web/ui-kit/commit/de0798801c605e6f82a1c7eea4366084a437f21e)) (by Aidar Lukmanov)
- adding notice to ekogreen ([`b1143eb`](https://gitlab.com/upstra/web/ui-kit/commit/b1143eb88b9e0fec0dd8f26ea47b7fd53933ebbf)) (by Julien Barbay)
- introduce icon stories ([`f3dffe1`](https://gitlab.com/upstra/web/ui-kit/commit/f3dffe1c110ec9a2ee485541fa80b41d9d69f616)) (by Julien Barbay)
- update chat messages ui ([`43e2851`](https://gitlab.com/upstra/web/ui-kit/commit/43e2851b3fb2e6e87f7772096cd962b1704fd68b)) (by Aidar Lukmanov)
- add loading state on avatars ([`8eeeb82`](https://gitlab.com/upstra/web/ui-kit/commit/8eeeb82c57ae271597801d47325787af89b5ea2e)) (by Julien Barbay)
- add default backgroundImage to avatar ([`b249782`](https://gitlab.com/upstra/web/ui-kit/commit/b249782e4cac6ac0f5c311a96682d5fb0516f9be)) (by Julien Barbay)
- Fix storybook static export styles ([`0bbcf41`](https://gitlab.com/upstra/web/ui-kit/commit/0bbcf41ce3174b32a2282ceed29abd209fe4e366)) (by Aidar Lukmanov)
- rewrite sidemenu to support new menu in the future ([`754c996`](https://gitlab.com/upstra/web/ui-kit/commit/754c996cd4f119b45a986a05ef1d2a5f536d316e)) (by chaiwattsw)
- Initial ci pipeline for publishing ([`5d0cf01`](https://gitlab.com/upstra/web/ui-kit/commit/5d0cf014df1d6ad74a02935641fa6cc235f9d0fe)) (by cpv123)
- Remove unused deps from package json ([`2399b51`](https://gitlab.com/upstra/web/ui-kit/commit/2399b51f5b1598577710bbfc025aa2c3696d544b)) (by cpv123)
- add storybook config ([`9b4c0be`](https://gitlab.com/upstra/web/ui-kit/commit/9b4c0bea65a606104fefd80a7bc2a3f4d78532cb)) (by Aidar Lukmanov)
- add dropdowncontainer to header layout ([`38e6858`](https://gitlab.com/upstra/web/ui-kit/commit/38e6858177cf6c0e1f243c05935865a76aa6aedc)) (by chaiwattsw)
- add avatar stories ([`ad22727`](https://gitlab.com/upstra/web/ui-kit/commit/ad2272726baa59cec5324341371a498dbca0eed3)) (by chaiwattsw)
- add avatar stories ([`887db69`](https://gitlab.com/upstra/web/ui-kit/commit/887db6990e074a1ae4463da5067672fe2190ed46)) (by chaiwattsw)
- add avatar size customization ([`5dece5c`](https://gitlab.com/upstra/web/ui-kit/commit/5dece5cc83ebbed186667a2284bb5fa422ae11b8)) (by Aidar Lukmanov)
- [CI] Separate build step in publish pipeline ([`955d499`](https://gitlab.com/upstra/web/ui-kit/commit/955d499e2a0123fe983d4a63b0a98c7b0aaa46e9)) (by Chris Vibert)
- Fix hsla to string function ([`bdaa837`](https://gitlab.com/upstra/web/ui-kit/commit/bdaa8378f15ba8cfce15fa84ffa06d1a54c0efd9)) (by cpv123)
- Add audit job ([`42c2132`](https://gitlab.com/upstra/web/ui-kit/commit/42c2132be01a44074a3a5dc2064ecfa4a96a79d7)) (by cpv123)
- Add controls to Switch component story ([`ebb04ff`](https://gitlab.com/upstra/web/ui-kit/commit/ebb04ffe7fba9736b164981de1fd689178b52a08)) (by cpv123)
- use linkify from common components ([`17b1a27`](https://gitlab.com/upstra/web/ui-kit/commit/17b1a278c93c7bb5d401fe00f6df072712c6a1ad)) (by Aidar Lukmanov)
- reorganize stories ([`92a71af`](https://gitlab.com/upstra/web/ui-kit/commit/92a71af78efbeb1ff07519ee6c4d9a07ebcc8de1)) (by Julien Barbay)
- Revert "Use inheritence for before_script and image" ([`72f8aa4`](https://gitlab.com/upstra/web/ui-kit/commit/72f8aa4097ffe2295909197f6c540905ebb364ef)) (by cpv123)
- Use inheritence for before_script and image ([`ad2fcb2`](https://gitlab.com/upstra/web/ui-kit/commit/ad2fcb2b3595f0de8e5a787ceff4d56f86740945)) (by cpv123)
- hook to simplify live object usage ([`a7a1d55`](https://gitlab.com/upstra/web/ui-kit/commit/a7a1d55eddba5c003c62b2fa64d1a3d04aa48aac)) (by Aidar Lukmanov)
- Add publish version script for confirmation ([`49c7929`](https://gitlab.com/upstra/web/ui-kit/commit/49c7929a799e27767e6a9449d161ed9e7b6b9da4)) (by cpv123)
- Prevent HSL value from going above 100% ([`372b240`](https://gitlab.com/upstra/web/ui-kit/commit/372b240cbff0fb284ebec4c1bb49c4558a5e173b)) (by cpv123)
- added auto comment on gitlab pr with env url ([`aebc831`](https://gitlab.com/upstra/web/ui-kit/commit/aebc8313f2ff9e90b8e6bb12e4caa6c2c6990bc6)) (by Julien Barbay)
- Storybook to support webpack aliasing ([`0b17345`](https://gitlab.com/upstra/web/ui-kit/commit/0b173453ebb54cd910d88fee2a8d7777f0ac06a4)) (by cpv123)
- Allow stories dependencies to remain as devDependencies ([`9fe9c66`](https://gitlab.com/upstra/web/ui-kit/commit/9fe9c66c90ecca0652b14ee998bded47a926ca82)) (by cpv123)
- custom components optimization ([`056f967`](https://gitlab.com/upstra/web/ui-kit/commit/056f967014e0847b1d81617d7309d49d3120a2ea)) (by Aidar Lukmanov)
- Use decimal values for shades and ensure lightness does not go above 1 ([`cecbe8a`](https://gitlab.com/upstra/web/ui-kit/commit/cecbe8a6346aec16207ab755c95bacbdee370a3c)) (by cpv123)
- Add webpack globalObject for server-side rendering (Next.js) ([`62a3afa`](https://gitlab.com/upstra/web/ui-kit/commit/62a3afadeca9396a811e2d06c5a6720beb26810b)) (by cpv123)
- Turn off eslint rule to allow importing devDependencies ([`fe3fca9`](https://gitlab.com/upstra/web/ui-kit/commit/fe3fca9435f51687ded4795ff8144917a16f1fff)) (by cpv123)
- change faCaretDown icon to faSortDown icon ([`5fef66b`](https://gitlab.com/upstra/web/ui-kit/commit/5fef66bc6f92e91bbe41a9505b04d9a35e90a988)) (by chaiwattsw)
- Use css helper function to ensure that theme objects are converted to string literals ([`e0a7b9a`](https://gitlab.com/upstra/web/ui-kit/commit/e0a7b9a1a5c06532e80b158f3b67bb1fbe871dd1)) (by cpv123)
- remove knobs addon from dev dependencies ([`0b862c4`](https://gitlab.com/upstra/web/ui-kit/commit/0b862c4c3918fe87b100a29883119716215f9679)) (by chaiwattsw)
- Add other atomic components into components stories section ([`de13407`](https://gitlab.com/upstra/web/ui-kit/commit/de13407dd2e5a9b333b5b8cfb8a9372ae73e4b3a)) (by cpv123)
- Update rule to run jobs on commit tag ([`ff4b98d`](https://gitlab.com/upstra/web/ui-kit/commit/ff4b98d967c848d44fea4ef324d565f5334839ce)) (by cpv123)
- Specify image for each job ([`2a040f7`](https://gitlab.com/upstra/web/ui-kit/commit/2a040f7f18e24a7d41f8a6c93757b85d5ee1a6c6)) (by cpv123)
- Add libraryName and change libraryTarget to umd ([`2231fb0`](https://gitlab.com/upstra/web/ui-kit/commit/2231fb0d387f4b2005f7e5d79d3e23923a5935f6)) (by cpv123)
- Allow React fragment shorthand ([`ea38c5f`](https://gitlab.com/upstra/web/ui-kit/commit/ea38c5fab3afbd1cacf969b1e1801519b8365760)) (by cpv123)
- Update .gitlab-ci.yml ([`60ce0bc`](https://gitlab.com/upstra/web/ui-kit/commit/60ce0bcb767665be474bef75d473e7947792d9ec)) (by Julien Barbay)
- Fix use of theme colors after rebase ([`497f957`](https://gitlab.com/upstra/web/ui-kit/commit/497f9579802d2a5c019c9f8fb38f4404d5a59168)) (by cpv123)
- Add missing colors to default theme ([`0b00356`](https://gitlab.com/upstra/web/ui-kit/commit/0b00356c6502eb5a63c83a6fd03c3dbd2cf232f6)) (by cpv123)
- Change webpack externals to not include certain packages that should be bundled ([`2c23c87`](https://gitlab.com/upstra/web/ui-kit/commit/2c23c87b164df56cd43462d1cf3733c2f3d1cf60)) (by cpv123)
- correctly show long community names ([`6d97c0e`](https://gitlab.com/upstra/web/ui-kit/commit/6d97c0ebee8606d0c23d4a681f90359825e7c9c3)) (by Aidar Lukmanov)
- Handle fallback font and use better fallback font ([`0fd957d`](https://gitlab.com/upstra/web/ui-kit/commit/0fd957d0d7ef0f6c52d76ef1f2d7a624ece43541)) (by cpv123)
- TEMP - change lightness by absolute value rather than percentage ([`fff8d13`](https://gitlab.com/upstra/web/ui-kit/commit/fff8d13a7a0296e3fd854a0e5a52fc42de64e9b9)) (by cpv123)
- fix uploading animation mocking ([`3f3b295`](https://gitlab.com/upstra/web/ui-kit/commit/3f3b29527e3764a8fd6ca31461ffeebb21a3dc60)) (by Aidar Lukmanov)
- Use data from model in case if already exist ([`0d01131`](https://gitlab.com/upstra/web/ui-kit/commit/0d01131974138d817b23e92815860c43fa825230)) (by Aidar Lukmanov)
- Comment about temporary test file ([`997151c`](https://gitlab.com/upstra/web/ui-kit/commit/997151c8d7a4632a87e8969a0db82589d6571dcb)) (by cpv123)
- Add publish command ([`1595fcc`](https://gitlab.com/upstra/web/ui-kit/commit/1595fccc255cd12dd7cd2e977c2a485cba9a21e7)) (by cpv123)
- Replace font awesome token with env variable ([`4f1dd5d`](https://gitlab.com/upstra/web/ui-kit/commit/4f1dd5df69cad404a26c3960b77f455772298259)) (by cpv123)
- setup per pr build ([`06ff71c`](https://gitlab.com/upstra/web/ui-kit/commit/06ff71c58f43272e9b4826fa493de8870a8b7b95)) (by Julien Barbay)
- Fix switch value ([`b07b1b7`](https://gitlab.com/upstra/web/ui-kit/commit/b07b1b738f7572323ccd98ec84beda2b5ff586d7)) (by cpv123)
- Bump version to 0.0.3 ([`3f6f941`](https://gitlab.com/upstra/web/ui-kit/commit/3f6f941ba0f8c7ca90ff6b1d870ff9fb22ca2126)) (by cpv123)
- Better import of lodash function ([`cde15c2`](https://gitlab.com/upstra/web/ui-kit/commit/cde15c26543d1cdf6db63d03906c1a3d780fbd08)) (by cpv123)
- npm ignore the storybook build directory ([`3f25d23`](https://gitlab.com/upstra/web/ui-kit/commit/3f25d23fda0771b87a3eda4cd28d594a506f0c78)) (by cpv123)
- Update contribute.md file with new build script ([`30df594`](https://gitlab.com/upstra/web/ui-kit/commit/30df5940953d0327457fc8fc12142c5eadb46e69)) (by cpv123)
- Add new script for building storybook ([`50201fa`](https://gitlab.com/upstra/web/ui-kit/commit/50201fa99ecd82061deeb56e234d5537c9f3b373)) (by cpv123)
- one more fix ([`d7e51cf`](https://gitlab.com/upstra/web/ui-kit/commit/d7e51cfb37db29a45a2198a4920e65e73c8d780b)) (by Aidar Lukmanov)
- add more file extensions ([`8b11618`](https://gitlab.com/upstra/web/ui-kit/commit/8b11618c09bef29fc8378062ebef505c29cba0a5)) (by Aidar Lukmanov)
- Add support of font awesome pro ([`17e947e`](https://gitlab.com/upstra/web/ui-kit/commit/17e947e4fb75f2ab395b483788c0d554abce2d4a)) (by Aidar Lukmanov)
- Initial commit ([`5cd5f92`](https://gitlab.com/upstra/web/ui-kit/commit/5cd5f9246f6248a61d51ad1e77fa1265738dabc5)) (by Jenya Khort)
- installing curl prior using it ([`1599461`](https://gitlab.com/upstra/web/ui-kit/commit/1599461730677a5adb5f18e6dee5a32c96616dad)) (by Julien Barbay)
- Add preversion script to run tests ([`e1095cd`](https://gitlab.com/upstra/web/ui-kit/commit/e1095cdee9f4c87c00094372fe07620cc3455f2e)) (by cpv123)

---