# Justice AI Unit

A website containing information about the AI adoption effort in the Ministry of Justice.

## Setting up the project locally

During the development of the project, we used Docker to containerize the application. This means that you can run the application on your local machine without having to install any dependencies.

The setup uses a detached assets-compilation container that monitors the local file system for changes. This can be referred to as a production-like setup, as the application container closely matches the environment in which the application will run in production.

### Prerequisites

Docker

### Run the application

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/ministryofjustice/ai-website.git && cd ai-website
```

Execute the following command to build the application:

```bash
make
```

> [!NOTE]
> The first time you launch the app, it will build the images and install the dependencies. This will be longer than future builds.
> 
> Subsequent builds will be faster as the dependencies will be cached.
> 
> In addition, on first run, `npm install` will be run in the `assets` container to install the dependencies for the app. This can take a few good seconds, meaning the app at `localhost` will show the default Nginx page until the assets are compiled.

**http://localhost/** will be available in your browser.
