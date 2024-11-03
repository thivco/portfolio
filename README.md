# Try it at home !

You only need to have the docker daemon and docker compose.

Clone the project, then run `docker compose up -d --build` inside the directory to run the app in containers. It'll build the app and try to connect to the database (which should fail, unless you use your own database).

Or visit https://thibaultv.up.railway.app/ to try it out in real conditions !


```markdown
thingz2do

- [x] Create database with validator if not existing

- [x] Create user within db to access/insert data

- [ ]  Front-end stuff (homepage disappearing, CSS, animations)

- [ ] github actions (currently failing cuz no docker-compose lmao)

- [ ] make tools uniform : use bun instead of npm for the client ?

- [ ] unit tests, coverage

- [ ] small icons appear when hovering, animated

- [ ] button that scrolls back up

- [ ] responsive

- [ ] put 3 random projects on the homepage with a roll to change the things dynamically
```