# TaskFlow Test Plan — Sprint 1

## Scope
Unit & component tests for **Sprint 1** backend (FastAPI) and frontend (React) deliverables only. No integration, E2E, or Sprint 2+ coverage.

---

## Backend API — Unit Tests (pytest + pytest-cov)

| Area | Test Cases | Expected Result |
|------|------------|-----------------|
| **Auth** `POST /auth/register` | valid payload → 201 + user + JWT; duplicate email → 409; invalid email/password → 422 | Status codes + JWT shape valid |
| **Auth** `POST /auth/login` | valid creds → 200 + JWT; invalid creds → 401; missing fields → 422 | JWT signed, exp claim present |
| **Auth** `POST /auth/logout` | valid token → 204; revoked token reused → 401 | Token blacklisted |
| **Tasks** `GET /tasks` | paginated list 200; auth required → 401; pagination params work | Pagination metadata correct |
| **Tasks** `POST /tasks` | valid payload → 201 + task; missing required → 422; unauth → 401 | Created task matches schema |
| **Tasks** `GET /tasks/{id}` | owner → 200; non-owner → 403; not found → 404 | Authorization enforced |
| **Tasks** `PUT /tasks/{id}` | owner updates → 200; non-owner → 403; invalid status → 422 | Fields updated, immutable fields ignored |
| **Tasks** `DELETE /tasks/{id}` | owner deletes → 204; non-owner → 403; not found → 404 | Task removed, 404 on re-fetch |
| **Models** | User/Task/Workspace CRUD + relationships | FK constraints, cascades, indexes |
| **Auth Middleware** | Valid JWT → request.user set; expired → 401; malformed → 401 | Middleware order correct |

**Coverage target:** ≥ 80 % on `app/**` (core modules)

---

## Frontend Components — Component Tests (Vitest + React Testing Library)

| Component | Test Cases | Expected Result |
|-----------|------------|-----------------|
| **TaskCard** | Renders title, assignee avatar, priority badge, due date; click triggers select; drag handles present | Props map to DOM; events fire |
| **Column** | Renders column title + task list; add-task button shows modal; empty state shows placeholder | Children rendered; interactions work |
| **Board** | Horizontal scroll of 3+ columns; drag-drop between columns updates Redux | Layout responsive; DnD updates state |
| **AppLayout / Sidebar / TopBar** | Navigation links render; user avatar dropdown toggles; responsive collapse | Routes match; a11y attrs present |
| **Redux hooks** (`useAppSelector`, `useAppDispatch`) | Typed selectors return state slices; dispatch triggers reducers | Type safety + redux devtools sync |

**Coverage target:** ≥ 70 % on `src/components/**`, `src/hooks/**`

---

## Test Documentation (per issue acceptance criteria)

- `TEST_PLAN.md` — this file (strategy, critical flows for Sprint 2 manual testing)
- `conftest.py` — pytest fixtures (user/task factories, async db session, auth headers)
- `vitest.setup.ts` — RTL render wrapper with Redux provider, MSW server

---

## CI/CD Integration (GitHub Actions)

| Workflow | Trigger | Steps | Gates |
|----------|---------|-------|-------|
| `backend-tests.yml` | PR to main | `pip install -r requirements.txt` → `pytest --cov=app --cov-fail-under=80` | Fail if coverage < 80 % |
| `frontend-tests.yml` | PR to main | `npm ci` → `npm run test -- --coverage` → `npm run lint` | Fail if coverage < 70 % or lint errors |

---

## Critical User Flows for Sprint 2 Manual Testing (Documented Here)

1. **New user registration → email verification → first login → create workspace → create first task**
2. **Drag task across columns (To Do → In Progress → Done) → real-time sync across browser tabs**
3. **Invite teammate → teammate accepts → both see board updates in real time**
4. **Filter tasks by assignee / priority / due date → URL reflects filters → refresh preserves state**
5. **Delete task → undo toast appears → undo restores task**