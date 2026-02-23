---
"@testplanit/wdio-reporter": minor
---

Add launcher service for single test run across all spec files

- New `TestPlanItService` WDIO launcher service with `onPrepare`/`onComplete` hooks that create a single test run before workers start and complete it after all finish
- `captureScreenshots` option on the service to automatically capture screenshots on test failure
- Extract shared state coordination into `shared.ts` for service-reporter communication
- String-based `configId`, `milestoneId`, `stateId`, and `tagIds` resolution via API
