# [1.3.0](https://github.com/testplanit/testplanit/compare/cli-v1.2.1...cli-v1.3.0) (2026-03-18)


### Bug Fixes

* add CORS headers to health endpoint for cross-origin requests ([5bdd471](https://github.com/testplanit/testplanit/commit/5bdd471120799cf8e3df891a8b1c45f724fb749f))
* add manual index sync for when the ehnahnced prisma client is bypassed ([b8e4354](https://github.com/testplanit/testplanit/commit/b8e43543d316ffc8d1f7cd9a7139fb15980cc1db))
* add Node types to TypeScript configuration and clean up test file imports ([101f528](https://github.com/testplanit/testplanit/commit/101f5289f9ce5c9c7b9ba04d0a1754fa3b3bbf5e))
* add pnpm overrides for security vulnerabilities ([87d845a](https://github.com/testplanit/testplanit/commit/87d845a397f49dbf5f9414802eadd0fcc6f1830b))
* add request timeout handling and improve GitHub issue ID construction ([cc95702](https://github.com/testplanit/testplanit/commit/cc957021a678abd8a61b57fe629977a6b91c0bce))
* add validation checks for data integrity in various charts ([8861224](https://github.com/testplanit/testplanit/commit/886122471a869a37bfe1c0c8f8991a6c6eeac959))
* **AddCase, BulkEditModal, FieldValueInput:** optimize issue data handling - performance refactor ([246d038](https://github.com/testplanit/testplanit/commit/246d038065f79939a2701e0594ac94281ddc7d8b))
* **api:** update file upload handling to use Uint8Array for Buffer instances ([1d4dba0](https://github.com/testplanit/testplanit/commit/1d4dba0a1ca549ae1eb8604bf677c8151700cd71))
* apply Redis connection type fix to workers and scripts ([65d843d](https://github.com/testplanit/testplanit/commit/65d843d5963eec0bc5f4c8435f274bc556a65d66))
* **auth:** update GET and POST handlers to await context.params in Next.js 15+ ([35aef69](https://github.com/testplanit/testplanit/commit/35aef6975896b5e721e86a7f3be74c7fbc70f455))
* **charts:** Limit automated result in chart plus more code cleanup ([#132](https://github.com/testplanit/testplanit/issues/132)) ([bf0071c](https://github.com/testplanit/testplanit/commit/bf0071cec57d06c9774d79c7146a33c6db68da5a)), closes [#130](https://github.com/testplanit/testplanit/issues/130)
* **ci:** add js-yaml v3 override for read-yaml-file used by changesets ([4e7d15e](https://github.com/testplanit/testplanit/commit/4e7d15ee3347fa3fc2a4bc9e75e091bf37628ac6))
* **ci:** auto-approve Dependabot PRs before auto-merge ([#110](https://github.com/testplanit/testplanit/issues/110)) ([ccc614d](https://github.com/testplanit/testplanit/commit/ccc614d7311b64db4bc26614644fe0f4913e7e8b))
* **ci:** exclude @types/node from dev-dependency groups ([c9b92c0](https://github.com/testplanit/testplanit/commit/c9b92c05c1657c5eafdd5bd2fb3b5ede9cf3b88b))
* **ci:** ignore major version bumps for packages that break testplanit ([fe5280d](https://github.com/testplanit/testplanit/commit/fe5280d9c7f41272cd03de4d0d0191e035eb656b))
* **ci:** pass --run flag through to vitest in packages-release workflow ([5cbf992](https://github.com/testplanit/testplanit/commit/5cbf992a113f1aa9a2921da02f437cc570c7ebcc))
* **ci:** pass NPM_TOKEN to semantic-release step ([30086f2](https://github.com/testplanit/testplanit/commit/30086f2875a2be9148a60c707a4035cfea79e3ef))
* **db:** accept data loss on db push due to a new unique constraint ([0d8bc0f](https://github.com/testplanit/testplanit/commit/0d8bc0fb338e8d1bae55dd66c93aa5c5d02ef600))
* **dependencies:** bump undici override to >=7.24.0 for security patches ([cabe2ba](https://github.com/testplanit/testplanit/commit/cabe2baae042e5d9236c3984aceaf3af87cb1332))
* **dependencies:** update package versions and add new worker ([5dab844](https://github.com/testplanit/testplanit/commit/5dab844cf9a5a4879318173081bc11d88912b457))
* **dependencies:** update package versions and improve two-factor authentication handling ([63e178f](https://github.com/testplanit/testplanit/commit/63e178f37bc15f2b362330f8d8cea99de93f3ee8))
* **docker:** increase memory limits and optimize service configurations ([358c5c1](https://github.com/testplanit/testplanit/commit/358c5c1b84bc864d3dbfc6754388ca1a940f2a87))
* **docs:** clarify role of Project Administrators in prompt configuration settings ([d0e15aa](https://github.com/testplanit/testplanit/commit/d0e15aa9ffb396e3fb6af64a4e288be918ad2129))
* **docs:** correct link to Prompt Configuration in LLM integrations documentation ([fb17000](https://github.com/testplanit/testplanit/commit/fb170008461750f5b733607c89b782c554b580bd))
* **docs:** update Jira Forge app documentation with new sections for Test Runs, Sessions, and Test Cases ([8228306](https://github.com/testplanit/testplanit/commit/82283065bf881c420d41230f1730769b1f30d219))
* enhance error handling and logging in seed process ([a8e5b53](https://github.com/testplanit/testplanit/commit/a8e5b53650cd38cee0d7070e71a0018beac56906))
* enhance multi-tenant support in notification service ([#69](https://github.com/testplanit/testplanit/issues/69)) ([6d6037b](https://github.com/testplanit/testplanit/commit/6d6037b93cb0816360788c38c45869aecab23dfa))
* enhance user profile link accessibility and update API usage ([fc01faf](https://github.com/testplanit/testplanit/commit/fc01faf2992e7bdf994fb2dcb339bcbb80d68253))
* ensure db-init-prod service builds correctly in Docker production ([#48](https://github.com/testplanit/testplanit/issues/48)) ([558c735](https://github.com/testplanit/testplanit/commit/558c735b7ce8aa4ebaa43795bd8c00a541d7ea9f))
* Feat/multi tenant testmo import ([#68](https://github.com/testplanit/testplanit/issues/68)) ([44cd5b4](https://github.com/testplanit/testplanit/commit/44cd5b434b6f6f7606ca92cd11a94f7e1b7e0108))
* fix search unit tests since adding pagination info to the search header as well as footer ([82a2676](https://github.com/testplanit/testplanit/commit/82a267620b05141cf87a0e30444f19d8d382fa95))
* fix the failing unit tests due to UploadAttachments changes ([eff0fdc](https://github.com/testplanit/testplanit/commit/eff0fdc27c47688be4e9cdad2305db17ba501680))
* Fix/e2e test fixes ([#52](https://github.com/testplanit/testplanit/issues/52)) ([df8cc36](https://github.com/testplanit/testplanit/commit/df8cc369d07b01e85f54eebb4eca22a5a9a3afb9)), closes [#96](https://github.com/testplanit/testplanit/issues/96) [#94](https://github.com/testplanit/testplanit/issues/94) [#99](https://github.com/testplanit/testplanit/issues/99) [#98](https://github.com/testplanit/testplanit/issues/98) [#102-107](https://github.com/testplanit/testplanit/issues/102-107)
* Fix/minor bug fixes ([#53](https://github.com/testplanit/testplanit/issues/53)) ([932fce9](https://github.com/testplanit/testplanit/commit/932fce96c9cbccedb90b87b74f410e2ff5b93f5f))
* **FlakyTestsBubbleChart:** enhance execution checks and data handling ([ee9097c](https://github.com/testplanit/testplanit/commit/ee9097c82c5f6d24a65f6f0d68a308c3c6a35436))
* **forge-app:** strip trailing slashes from URLs in resolver functions ([c2eae82](https://github.com/testplanit/testplanit/commit/c2eae82dffd470e1f5f70aa237ed1175239308a0))
* Handle default values for text long / link result fields ([#67](https://github.com/testplanit/testplanit/issues/67)) ([f20a5d4](https://github.com/testplanit/testplanit/commit/f20a5d43423a40e90b18b01d7ecb61fe35f06150))
* implement batch fetching of test run summaries to optimize performance ([672915b](https://github.com/testplanit/testplanit/commit/672915b12392436ef74cc7c374a4e2b5421b2830))
* implement tenant-aware Elasticsearch sync for multi-tenant support ([5bc207c](https://github.com/testplanit/testplanit/commit/5bc207cdaef94cf4e6e786fc4423b20eb02ae019))
* **integrations:** add Forge API key authentication for Jira test-info endpoint ([9e1cbe3](https://github.com/testplanit/testplanit/commit/9e1cbe35723c61d1e360392b6058e24c8e3c4fc1))
* **integrations:** add Forge API key authentication for Jira test-info endpoint ([2183a6b](https://github.com/testplanit/testplanit/commit/2183a6b72a9c00c059da41958259e215a2445ef8))
* **issue-columns:** Update Issue Tracking report dimensions ([0170744](https://github.com/testplanit/testplanit/commit/0170744fbf5e75f4c5c9b48bae99e60abcd945ae))
* **JunitTableSection:** streamline JUnit results fetching logic ([359999e](https://github.com/testplanit/testplanit/commit/359999e20a961cd912a2de7f4c027beac427fa38))
* **lint:** remove unused variable assignments in SlashCommand and CLI config ([974bbfd](https://github.com/testplanit/testplanit/commit/974bbfd49499f72bf46dd3838560b5e10d8adb31))
* **llm:** enhance error handling in LLM integration connection tests ([a4e75e2](https://github.com/testplanit/testplanit/commit/a4e75e2b64f156328f6e44c6ba7c7a5b0662b51b))
* **localization:** update notification and digest messages for English, Spanish, and French ([f698d68](https://github.com/testplanit/testplanit/commit/f698d68332d0ae99a927709c05c6ab4c563fb37b))
* Long Text/Link case field default does not populate correctly. ([#59](https://github.com/testplanit/testplanit/issues/59)) ([5fc335c](https://github.com/testplanit/testplanit/commit/5fc335cc8e5a0cd20f04b71aac3cfb26cf71869e))
* move ref to useEffect ([7b525f8](https://github.com/testplanit/testplanit/commit/7b525f8bb86fdf4cd58aef595983b82713f191d3))
* **notification:** enhance notification preferences with global mode label ([79a27a9](https://github.com/testplanit/testplanit/commit/79a27a9b58f6f7d0a599b12fba35774eea01e733))
* prevent double-firing of auto-select effect in Cases component ([3d59c0c](https://github.com/testplanit/testplanit/commit/3d59c0c89330bece32efdf425ed4c6d0e040958a))
* prevent race condition when trying to add new user preferences before the user is created ([d8586e5](https://github.com/testplanit/testplanit/commit/d8586e5b67ee12d88850d48b1744ed9d57ff6178))
* **proxy:** improve language preference handling and preserve error parameters in redirects ([197e339](https://github.com/testplanit/testplanit/commit/197e339701e188e5b798cef3ec14afdfaca5cb13))
* remap HTTP status codes to prevent nginx ingress interception of API error responses ([ccc1d62](https://github.com/testplanit/testplanit/commit/ccc1d6205be66fe6fb0a0ecb66212c44ff45e8fc))
* remove debug console.log statements from production code ([dae2346](https://github.com/testplanit/testplanit/commit/dae2346d2191c68ed25b6597735f005762d4cdb2))
* resolve Dependabot security vulnerabilities ([9a17d3f](https://github.com/testplanit/testplanit/commit/9a17d3f8a6926014d7796365d2fed74432a472e2)), closes [#96](https://github.com/testplanit/testplanit/issues/96) [#94](https://github.com/testplanit/testplanit/issues/94) [#99](https://github.com/testplanit/testplanit/issues/99) [#98](https://github.com/testplanit/testplanit/issues/98) [#102-107](https://github.com/testplanit/testplanit/issues/102-107)
* resolve issues with file handling in ImportCasesWizard ([db3f98b](https://github.com/testplanit/testplanit/commit/db3f98b0d61a55cf9ef488d88d27818e369cd15e))
* revert broken ZenStack query optimization and provider changes ([b99f696](https://github.com/testplanit/testplanit/commit/b99f6968d5488e1047f6320860d37b5818191ec5))
* stabilize DataTable column refs to prevent dialog/modal remounts ([5f57bb5](https://github.com/testplanit/testplanit/commit/5f57bb51fabff02163d1eeb0c2bb6d93824cf5da))
* stabilize DataTable column refs to prevent dialog/modal remounts ([77cf664](https://github.com/testplanit/testplanit/commit/77cf664201dea66b09e0b2c6d87ae347c3cbbe75))
* stabilize mutation refs in admin components to prevent remounts ([dcb3ec5](https://github.com/testplanit/testplanit/commit/dcb3ec5d96fcb6e4ca7d2cb7c3ac42b81a7f4ee4))
* stabilize mutation refs in admin components to prevent remounts ([c2573fb](https://github.com/testplanit/testplanit/commit/c2573fbff7501ffece022c6846bf363308383b05))
* streamline query refetching in user management components ([e859352](https://github.com/testplanit/testplanit/commit/e859352759901394429f54b666816d55d775c27f))
* **TestRunPage, Loading:** enhance loading behavior and JUnit data fetching ([482a767](https://github.com/testplanit/testplanit/commit/482a76789ecf7df505a9b99ce5cd3ecc8c8567bd))
* top toast was being covered by bottom toasts preventing text from displaying ([e7fb54d](https://github.com/testplanit/testplanit/commit/e7fb54d85bf30f59c62480affc114d7549a647e2))
* Unable to expand project/admin menu sections in mobile mode ([3f0ab56](https://github.com/testplanit/testplanit/commit/3f0ab565fdbe017b94ff3762b59440b4d56071b1))
* update default color value in FieldIconPicker to undefined ([5b48a54](https://github.com/testplanit/testplanit/commit/5b48a5475a2454cd94a8c56508b0d2cbec01912b))
* update dependencies and enhance user profile features ([180b34b](https://github.com/testplanit/testplanit/commit/180b34bf6450bb01edc54839978feecc396c8586))
* update dependency specifiers in pnpm-lock.yaml ([2265e4c](https://github.com/testplanit/testplanit/commit/2265e4c408dec19bca57d992a907091b774dfba1))
* update field labels and improve translation handling in IntegrationConfigForm ([0dea63b](https://github.com/testplanit/testplanit/commit/0dea63bb8b06ab52c886a04affae086772695040))
* update hono and other dependencies for improved compatibility ([6c92666](https://github.com/testplanit/testplanit/commit/6c926661e499f67773e8681257f02990abfd31e8))
* update Redis connection type in queue initialization ([76bc417](https://github.com/testplanit/testplanit/commit/76bc4178841d9fb2ce03edcc58a4ba2743cb60f4))
* **workers:** add new background workers and update concurrency settings ([0327595](https://github.com/testplanit/testplanit/commit/032759562d80cf5d8f954e020953728643b6c37f))
* **workers:** enhance multi-tenant support in syncWorker and autoTagWorker ([641b894](https://github.com/testplanit/testplanit/commit/641b89402a9bd29f56b61d3cb9e3e23d794d81e7))
* **workers:** pass tenant Prisma client to IntegrationManager.getAdapter ([9a97412](https://github.com/testplanit/testplanit/commit/9a9741246ad16552fb5496c66ae07c9bb2425015))


### Features

* add Microsoft SSO integration and demo project with guided tour ([#70](https://github.com/testplanit/testplanit/issues/70)) ([2ab8f62](https://github.com/testplanit/testplanit/commit/2ab8f62d896716ac0617cedd5eb58ed7f200331f))
* add Share Links feature for secure report and content sharing ([#54](https://github.com/testplanit/testplanit/issues/54)) ([78ad1f7](https://github.com/testplanit/testplanit/commit/78ad1f7038035dc2f26aec1d01a50dc8db9a8337))
* **AdminMenu:** restructure menu options into sections and enhance functionality ([5897547](https://github.com/testplanit/testplanit/commit/5897547ee8bafe838bf77f05bfcbc1e29185dbb2))
* **docs:** add client redirects for LLM integrations to prompt configurations ([f7d89aa](https://github.com/testplanit/testplanit/commit/f7d89aab2e29f599d455d39bdb057337ccca2d95))
* enhance sorting functionality in API tokens and projects ([c41b38b](https://github.com/testplanit/testplanit/commit/c41b38b14a186f8b9da3e9dd7437581309381473))
* export templates ([adf0655](https://github.com/testplanit/testplanit/commit/adf0655ab24e588a59d238c01e6ec588a843d004))
* export templates ([#84](https://github.com/testplanit/testplanit/issues/84)) ([641bc8b](https://github.com/testplanit/testplanit/commit/641bc8b5f2b2dbdec3d2be3e5c81a44012030e08))
* **ProjectMenu:** enhance menu structure and add new settings options ([d515c98](https://github.com/testplanit/testplanit/commit/d515c9815a2ee82cb38b532532ed039aa0e230cf))
* **prompt-config:** add unit tests ([4710b8a](https://github.com/testplanit/testplanit/commit/4710b8a37c120502fa9de6db0334d3c6fb69f649))
* **prompt-config:** introduce PromptConfig and PromptConfigPrompt models ([caf4c9b](https://github.com/testplanit/testplanit/commit/caf4c9b5351966f2d78b6c5b2f02bd750b4021cd))
* **prompts:** enhance project display in prompt configurations ([55b5df0](https://github.com/testplanit/testplanit/commit/55b5df0ecd35b24373eba047aa9a210546679e38))
* release v0.10.0 - reporting enhancements and version management improvements ([#46](https://github.com/testplanit/testplanit/issues/46)) ([9e73faf](https://github.com/testplanit/testplanit/commit/9e73faf62efbd7eca26ab9f1020a048a83fe00d3))
* **release:** remove v0.13.0 release notes and update v0.14.0 blog title ([089007f](https://github.com/testplanit/testplanit/commit/089007f0a7d89693f6ed97336dbd3842e7b19788))
* **translations:** add prompt configuration translations for Spanish and French ([ceb2df8](https://github.com/testplanit/testplanit/commit/ceb2df8aab14995f4c45d9ef6212d17b20543d1d))
* trigger release ([11d1ca7](https://github.com/testplanit/testplanit/commit/11d1ca7401824d582add416a0652d75f59e9c574))
* trigger v0.15.0 release ([92b19b1](https://github.com/testplanit/testplanit/commit/92b19b132cf91da81c56308e336a9200ce48dc2d))
* **user-guide:** update LLM integrations and add prompt configurations section ([17c6ce6](https://github.com/testplanit/testplanit/commit/17c6ce6db5b661dcb7ef4e6b4d014f5496fffbe5))
* **wdio-reporter:** add launcher service for single test run across all spec files ([d1588ba](https://github.com/testplanit/testplanit/commit/d1588ba85bcad5d7ca65dd329258f422f18d055b))


### Performance Improvements

* Performance/optimize test run summary page queries ([#58](https://github.com/testplanit/testplanit/issues/58)) ([64b78a7](https://github.com/testplanit/testplanit/commit/64b78a78ce134cac21834c5e1cbd3ceb86f4d3f6))

# [1.2.0](https://github.com/testplanit/testplanit/compare/cli-v1.1.1...cli-v1.2.0) (2026-01-06)


### Bug Fixes

* **adapter:** enhance URL validation in AzureOpenAIAdapter's testConnection method ([fb3d0fa](https://github.com/testplanit/testplanit/commit/fb3d0fab714f66c81bfb3d747ab9cf94665c7a66))
* **bulk-edit:** increment version number in bulk edit route ([ba93044](https://github.com/testplanit/testplanit/commit/ba93044041037e39b77183d5f670976d2dd222da))
* **bulk-edit:** update state handling in bulk edit route ([18e68c9](https://github.com/testplanit/testplanit/commit/18e68c93b4b9cbb3d78bd19f05c02bc17e092307))
* **Cases, columns:** show grip handle when data table rows are sortable in Cases.tsx ([89bba65](https://github.com/testplanit/testplanit/commit/89bba6563ec9fbb10b6a3fc952f3995e0b466740))
* **columns:** add optional chaining to prevent runtime errors ([2f71454](https://github.com/testplanit/testplanit/commit/2f71454a4a5ec8d72ab19a7ed26ce919bfce831b))
* **columns:** improve error handling in column data processing ([a859481](https://github.com/testplanit/testplanit/commit/a859481cde0be1887eac20fa8b4b8d8c402c8d2b))
* **CustomNode:** remove CustomNode component ([876af42](https://github.com/testplanit/testplanit/commit/876af429d5abbce51f34d4b2e194f2f076c1567e))
* **folders:** Fix the folder issues described in Issue 33 ([#35](https://github.com/testplanit/testplanit/issues/35)) ([f94a1a0](https://github.com/testplanit/testplanit/commit/f94a1a0f9c9e3950fec28a7024f81b32ea3b94c0))
* **JunitTableSection:** update translation key for completed date display ([c474c32](https://github.com/testplanit/testplanit/commit/c474c321f00ccc88fa4ed5009187840cb4c45f69))
* **tags:** implement case-insensitive tag matching and restore soft-deleted tags ([c395d73](https://github.com/testplanit/testplanit/commit/c395d73b7e1ef2406cfaf232b0d73548c12b3722))
* **tags:** update tag handling in CSV import process ([c85328f](https://github.com/testplanit/testplanit/commit/c85328faa92bbd89a650c0e4dded1cb2be5b531c))
* **testResultsParser:** update duration normalization logic to ensure consistent conversion from milliseconds to seconds ([9094504](https://github.com/testplanit/testplanit/commit/9094504fce2cda2119f1ef2ed9bc5761c2cba1be))
* **TestRunPage:** wrap AddTestRunModal in SimpleDndProvider for drag-and-drop context ([f667303](https://github.com/testplanit/testplanit/commit/f6673036c59bc7929a09446b4d96ca5db6e7f5af))
* **tiptap:** prevent rendering of ContentItemMenu when editor lacks plugin support ([d33d52f](https://github.com/testplanit/testplanit/commit/d33d52f38645c2ccb5c6d36df3c86d63f3e5f1e7))
* **tooltip:** update TooltipTrigger components to include type="button" ([d0fb809](https://github.com/testplanit/testplanit/commit/d0fb80906584768da6da81c969ef9c62c7284b0d))
* **translations:** add new translation keys for workflow types and dimensions ([475c5cc](https://github.com/testplanit/testplanit/commit/475c5ccb38187cfa6197b4d109fdc5842351e359))
* **translations:** streamline translation usage across components ([de33bcb](https://github.com/testplanit/testplanit/commit/de33bcb5963118c77bfba0e2534d1db8a6cf73f7))
* **translations:** update error messages and display names for better user experience ([05967df](https://github.com/testplanit/testplanit/commit/05967dfc469947eb1f78818143a0f011a9c6aa0e))
* **translations:** Update related import messages for consistency across test result formats. ([19e69b8](https://github.com/testplanit/testplanit/commit/19e69b86ae2b49fb992f9c4696ddafd4017c372d))
* **translations:** update translation keys and improve localization consistency ([c733c9d](https://github.com/testplanit/testplanit/commit/c733c9db5665de8621b167d752b4bedf02ad30f3))
* **UserProfile:** enhance date formatting logic to include time format ([1f4d45e](https://github.com/testplanit/testplanit/commit/1f4d45ef8d3471cb169217001263c6402b468ae9))


### Features

* **tiptap:** add ContentItemMenu and drag handle functionality ([85d8c4a](https://github.com/testplanit/testplanit/commit/85d8c4a66e623fc89c488ae64989a981472cfdbb))

## [1.1.1](https://github.com/testplanit/testplanit/compare/cli-v1.1.0...cli-v1.1.1) (2025-12-28)

# [1.1.0](https://github.com/testplanit/testplanit/compare/cli-v1.0.2...cli-v1.1.0) (2025-12-19)


### Bug Fixes

* **changesets:** use correct package names in ignore list ([e0a61cb](https://github.com/testplanit/testplanit/commit/e0a61cb4650a2d824071b54bdc8a6114a74cd0ce))
* **ci:** skip postinstall scripts in package release workflow ([4624c92](https://github.com/testplanit/testplanit/commit/4624c92ebdd6de67097ad7f371ac39a236d31735))
* **docker:** add lockfile to testplanit for local Docker builds ([3d1dd94](https://github.com/testplanit/testplanit/commit/3d1dd9475e38184fffbd922f622e0a2ff65f0ded))
* **docker:** resolve lockfile not found error in Docker builds ([f9e48f6](https://github.com/testplanit/testplanit/commit/f9e48f6e74784f53bf4f3fff80360b47f2403804))
* **docker:** use testplanit-specific lockfile instead of monorepo lockfile ([da46c98](https://github.com/testplanit/testplanit/commit/da46c984918b13a01c0711ec6a6b1fabb5ea0898))
* **emailWorker:** update notification handling for SYSTEM_ANNOUNCEMENT ([978c773](https://github.com/testplanit/testplanit/commit/978c7735696b4bd1f95ebf0e5e33ca8cca2a7974))
* **env:** update DATABASE_URL in .env.example for consistency with Docker setup ([28ac66e](https://github.com/testplanit/testplanit/commit/28ac66ee1d757557ee35b36e3b98d22859f73146))
* **env:** update DATABASE_URL in .env.example for Docker compatibility ([398838c](https://github.com/testplanit/testplanit/commit/398838c053ca8be445dcc7fac730b3034637754d))
* **env:** update DATABASE_URL port in .env.example for consistency with Docker setup ([93d6bd9](https://github.com/testplanit/testplanit/commit/93d6bd932f89e0ee238c9ff72f59ef1f771c69c0))


### Features

* **export:** add PDF export functionality ([5a84252](https://github.com/testplanit/testplanit/commit/5a842525927641d04b1327e8812223c7a500e4c2))

## [1.0.2](https://github.com/testplanit/testplanit/compare/cli-v1.0.1...cli-v1.0.2) (2025-12-15)


### Bug Fixes

* **audit-logs:** add new audit actions for API key management ([62bed46](https://github.com/testplanit/testplanit/commit/62bed466997c1e0e5260af70df31257aece605a2))
* **ci:** use PAT token to trigger Docker build workflow ([5f34752](https://github.com/testplanit/testplanit/commit/5f347528f945818ddde652b4873847fa23ac049d))
* **comments:** add milestone support to UserMentionedComments component ([88cf140](https://github.com/testplanit/testplanit/commit/88cf140afd15d25f8a868a5426a3a64a93f4a6e3))
* **dependencies:** update package versions and add new translations ([0d2ce7c](https://github.com/testplanit/testplanit/commit/0d2ce7cda1e2399fe2dc5b742654a032c7c322c5))

## [1.0.1](https://github.com/testplanit/testplanit/compare/cli-v1.0.0...cli-v1.0.1) (2025-12-11)


### Bug Fixes

* **docs:** update CLI installation instructions and enhance notification content ([374bd2e](https://github.com/testplanit/testplanit/commit/374bd2ee7908bfdd64e609f9532a07202c2ccc1d))

# 1.0.0 (2025-12-11)


### Bug Fixes

* **api:** add cache-control headers to prevent stale API responses ([5a8ac7f](https://github.com/testplanit/testplanit/commit/5a8ac7f45400d7250013c03c7f931c6f07db56ac))
* **api:** enhance project access control logic ([6a1548c](https://github.com/testplanit/testplanit/commit/6a1548c8b2bc9c18c4971fb25703aa00e753d839))
* **auditLog:** validate projectId existence before logging and handle non-existent projects ([75e85a8](https://github.com/testplanit/testplanit/commit/75e85a8e194b1316a81eabfaf07528fef1584b3d))
* **auth:** Clarify comments in magic link token hashing logic ([ccb5ee7](https://github.com/testplanit/testplanit/commit/ccb5ee784a7f8558cdb6dee929d173965d4e68de))
* **build:** add auditLogWorker to entry points ([001a432](https://github.com/testplanit/testplanit/commit/001a43233580e90dfc5e8e88e9841b635e5d67e9))
* **Cases:** optimize total case count calculation for folder view ([255ca99](https://github.com/testplanit/testplanit/commit/255ca99a2584c2c8829b81e0daa870cfe0c59b62))
* **ci:** improve version extraction and Docker build trigger logic in semantic-release workflow ([b873eaa](https://github.com/testplanit/testplanit/commit/b873eaa68ead89e5e14c0a241affb54a938b498e))
* **Dockerfile:** Ensure translation files are copied to both reference and distribution directories for email worker ([6fe3cf4](https://github.com/testplanit/testplanit/commit/6fe3cf472ba27e7f2223ffb32bbc07c4b2cc1c03))
* **docker:** Replace postgresql15-client with postgresql-client in Dockerfile for compatibility ([deb29ec](https://github.com/testplanit/testplanit/commit/deb29ecffdb0faba1afeae6d269fd5642da4f249))
* **docs:** update data-domain in Docusaurus config and improve form handling in TestResultsImportDialog ([97f2823](https://github.com/testplanit/testplanit/commit/97f2823923ae00c13033e83d6c1911722a53b7c3))
* Improve days difference calculation for milestone notifications ([2954364](https://github.com/testplanit/testplanit/commit/29543646b65784a4e474c40419924ba067178e5c))
* Invalidate cached Prisma clients when tenant credentials change ([437c8dc](https://github.com/testplanit/testplanit/commit/437c8dcfa17851f9c68ef929473c2ba47c5ff0c5))
* **issues:** add status and priority filters to issues page ([182be68](https://github.com/testplanit/testplanit/commit/182be680cf33cfbeb8bacf57d72189bde79c192e))
* **issues:** simplify access control logic and remove redundant project filter ([86d6632](https://github.com/testplanit/testplanit/commit/86d663236a9e19e0c1a0b00dd679bb93d72d640e))
* **layout:** Refactor storage mode detection logic for clarity ([3c060e5](https://github.com/testplanit/testplanit/commit/3c060e56d73f1a8f376d29aab42fa04c998032c5))
* **milestones:** replace watch with useWatch in MilestoneFormDialog and AddMilestoneModal ([7a986a5](https://github.com/testplanit/testplanit/commit/7a986a50b462c40206b1d9e50d5accf5d673f406))
* **permissions:** enhance access control for notifications and user data retrieval ([d9037ec](https://github.com/testplanit/testplanit/commit/d9037ec4abe22d33ca468ce5705eb46f889ca94c))
* **permissions:** enhance project access control logic ([8151e83](https://github.com/testplanit/testplanit/commit/8151e83c72a3a2c91ed455a794b86ab4c50f8345))
* **permissions:** improve access control checks and notification handling ([c7984c7](https://github.com/testplanit/testplanit/commit/c7984c7b7b11e8863a43785243a25176e2364121))
* **release:** correct release-please package path configuration ([93610d3](https://github.com/testplanit/testplanit/commit/93610d3cd437ccb7439f9490fb392f1f39e54bb6))
* **release:** exclude component from tag names ([02c404b](https://github.com/testplanit/testplanit/commit/02c404b8d85dbda088bf5bf68511b8fd76710109))
* **release:** remove duplicate release creation from workflow ([1e8c5a7](https://github.com/testplanit/testplanit/commit/1e8c5a794d70149dd235a4c8f167f02222b65918))
* **release:** simplify release-please config to fix PR titles ([d72bd34](https://github.com/testplanit/testplanit/commit/d72bd34fe0fc208d378c6e107611155f8f1409ec))
* **release:** Update GitHub CLI commands for consistency ([94e252b](https://github.com/testplanit/testplanit/commit/94e252b7119f8ad97f33c77647045cfcccdb1948))
* **release:** update lowercase repo name setting in workflow ([edb0a8e](https://github.com/testplanit/testplanit/commit/edb0a8e74a5ef0bbcd30846f0f91157c6edaee67))
* **release:** Update lowercase repo name setting in workflows ([43bf90b](https://github.com/testplanit/testplanit/commit/43bf90bcd936218d18cc874b290f797a2e6d854e))
* **release:** use PAT for release-please workflow ([8aaa2e5](https://github.com/testplanit/testplanit/commit/8aaa2e55b463b70034996cb4fbda58949e37aee9))
* **tags:** Correct tab content and pagination for sessions and test runs ([ade7a39](https://github.com/testplanit/testplanit/commit/ade7a3927e930db8019c2d407e02c62c5bffcc02))
* **tags:** enhance project access logic to include PROJECTADMIN role ([7972ac1](https://github.com/testplanit/testplanit/commit/7972ac1abceea74c0b2f1cee46120c08cf1677fa))
* **tags:** simplify access control logic ([3945a39](https://github.com/testplanit/testplanit/commit/3945a39936f46ef22ada05fb34efe31d823280c7))
* **testCase:** sync case field values on details page ([1fc701a](https://github.com/testplanit/testplanit/commit/1fc701a526021901d62a184c6184b2af3a9786f6))
* **users:** Disable API toggle for ADMIN access level ([29f3df9](https://github.com/testplanit/testplanit/commit/29f3df9561fcdad5174355f4179076151c46eb1f))
* **workers:** testmoImportWorker was using old generateRandomPassword code. ([be87543](https://github.com/testplanit/testplanit/commit/be87543b9b7f97f1b6dc1330dd4ee9999a3fbed7))


### Features

* add audit logging for compliance and traceability ([#18](https://github.com/testplanit/testplanit/issues/18)) ([7695a46](https://github.com/testplanit/testplanit/commit/7695a461cb9129cfc0c62b75638dff71fa39064d))
* add CLI tool for test result imports and API token authentication ([#22](https://github.com/testplanit/testplanit/issues/22)) ([4c889c3](https://github.com/testplanit/testplanit/commit/4c889c385b964a82b936022eb045a40bd2cf78dc))
* **api:** Enhance API documentation and integrate Swagger UI ([#6](https://github.com/testplanit/testplanit/issues/6)) ([8b6d6b2](https://github.com/testplanit/testplanit/commit/8b6d6b218d9d92277aee963ae43a83da4b83fa6d))
* **api:** Implement external API request detection and enhance JWT handling ([6924a79](https://github.com/testplanit/testplanit/commit/6924a79b093ec7f133fc6c0c5969c3f96c6e9f34))
* **auth:** add two-factor authentication ([#19](https://github.com/testplanit/testplanit/issues/19)) ([662ce57](https://github.com/testplanit/testplanit/commit/662ce5742f659bbeb84f6eab1e8e3768db31b193))
* **auth:** Hash magic link token before storing in database ([0d7ce6e](https://github.com/testplanit/testplanit/commit/0d7ce6eee218016f85029d1433d5b0302aec3277))
* bump version to 0.3.0 and add Magic Select announcement ([d98b977](https://github.com/testplanit/testplanit/commit/d98b977115d8fe2634bcf51bafc5ac71bc4c1ecf))
* **elasticsearch:** Add multi-tenant mode support in ElasticsearchAdmin ([1003b40](https://github.com/testplanit/testplanit/commit/1003b40259ce51457f6ce46f018dcf31648f1166))
* **email:** Add baseUrl to notification and digest email data for tenant-specific URLs ([7474df6](https://github.com/testplanit/testplanit/commit/7474df6c90eff155cf2485deb4088cb9100b7f09))
* Enhance Elasticsearch index filtering for multi-tenant support ([63662b6](https://github.com/testplanit/testplanit/commit/63662b6b0e5c1d0bf98252dc4b82531e785256ee))
* **file-storage:** Enhance file upload documentation and implement server action for proxy mode ([95782cc](https://github.com/testplanit/testplanit/commit/95782ccf774eece0918405d5c03377b04cdebefb))
* **import:** expand automated test results import for JUnit, TestNG, NUnit, xUnit, MSTest, Mocha, and Cucumber ([#20](https://github.com/testplanit/testplanit/issues/20)) ([a7856cd](https://github.com/testplanit/testplanit/commit/a7856cde96c0d3482f78469dfb720beb86e7196d))
* Milestone auto-completion and due date notifications ([#10](https://github.com/testplanit/testplanit/issues/10)) ([665b5a2](https://github.com/testplanit/testplanit/commit/665b5a208090246f7f75eccf54ae79451ea9450e))
* **milestones:** add comments support ([#15](https://github.com/testplanit/testplanit/issues/15)) ([a5e60b2](https://github.com/testplanit/testplanit/commit/a5e60b2d6a150e0a618d3f0f93e819d9c7aebf1c))
* **multi-tenant:** Implement tenant ID handling for Testmo imports ([665efba](https://github.com/testplanit/testplanit/commit/665efbac8cc95cd5342bc7dccb53e343e60b189f))
* **multiTenant:** Add baseUrl to TenantConfig and update email worker to utilize tenant-specific base URLs for notifications ([28dc26e](https://github.com/testplanit/testplanit/commit/28dc26eac1675f23f7638bcc3b169fc7ff713044))
* **multiTenant:** Enhance storage mode detection and add baseUrl to tenant configurations ([60af2f4](https://github.com/testplanit/testplanit/commit/60af2f4a31d38959eb2451cf8ebb333fa7f3d8e2))
* **multiTenant:** Update tenant configuration to include baseUrl in environment variable format ([f7be7de](https://github.com/testplanit/testplanit/commit/f7be7dec4964a820dd37cc4bc684ea83dd89cf8f))
* **permissions:** Enhance access control for project roles ([39292f6](https://github.com/testplanit/testplanit/commit/39292f6dc34f9f72b9b3fe301544ad4bd636262a))
* **permissions:** Expand access control for project roles ([429fd42](https://github.com/testplanit/testplanit/commit/429fd426f1387d01c176301caaef20beab2b935c))
* **ProjectRepository:** implement auto-paging for selected test case in run mode ([e8d638c](https://github.com/testplanit/testplanit/commit/e8d638c870bdfe2a6a93d7a3430fd95ef8bc7fd6))
* **translations:** Add "required for Admin" translations in English, Spanish, and French ([356b392](https://github.com/testplanit/testplanit/commit/356b3924915d33d16435a63bd3db98ecbbf9eb53))
