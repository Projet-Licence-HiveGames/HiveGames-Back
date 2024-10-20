# HiveGames-Back

- ``npm i`` : Install all dependencies
- Create a file ``.env`` in HiveGames-Back with all keys (you got an .env_example)
## Boot Up Server

- ``nodemon server.js`` : Start the server with a dependencies that can refresh automaticly when some edits are made
## Directory
> ### Src
> > ### Certs
> > - Need to put the certification of the DB
> > ### Config
> > - Got all the process to connect to the database
>
> > ### Controllers
> > - Contain all functions from the http query, and they work with models
>
> > ### Models
> > - Contain all the structure of the table/database
>
> > ### Routes
> > - Communicate with controller to redirect the good endpoint
>
> ### app.js
> Contain all route possible in the url of the navigator
### server.js
> All things to boot up the server
### .env
> All keys for the environment