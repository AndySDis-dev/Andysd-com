# StackRunner Test Plan

## Unit Tests
- Task parser converts shared text to job objects.
- Ranking function scores gigs based on payout, proximity, time window, effort, reliability.
- Route optimizer performs nearest-neighbor + 2-opt improvement.

## Integration Tests
- Intake → Route → Run Sheet → Export flow via Playwright.
- Offline Run Sheet loads from IndexedDB and syncs when online.
- Photo upload uses signed URLs and persists.

## Performance
- Route build p95 < 1.2s for 15 stops with cached matrix.
- Offline route viewer loads in <500ms from IndexedDB.

## Accessibility
- Keyboard navigation through gig list and map markers.
- High-contrast mode verification.

