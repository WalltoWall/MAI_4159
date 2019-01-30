# Bootstrap a New Project

When starting a new project, several accounts and resources need to be created
for the different services used. This includes hosting, content management
system, and code repository accounts.

1. Client creates Netlify and Prismic accounts
1. Wall-to-Wall creates GitHub repository
1. Wall-to-Wall creates projects on Netlify and Prismic
1. Client adds billing info to Netlify and Prismic
1. Wall-to-Wall connects `dev@walltowall.com` accounts to Netlify and Prismic

Each step is explained in more detail below.

## Create client accounts

Client needs to create the following accounts:

### Netlify

Sign Up URL: <https://app.netlify.com/signup>

Client should create an account with Email. Client should also add a payment method.

Credentials should be shared with Wall-to-Wall for configuration.

### Prismic

Sign Up URL: <https://prismic.io/signup>

Billing will be setup after Wall-to-Wall creates the repository.

Credentials should be shared with Wall-to-Wall for configuration.

## Create GitHub Project

Create the GitHub project on the `WalltoWall` organization using the project's
code (e.g. `HNB_4141`).

On your machine, create a new Gatsby project with the
`gatsby-starter-ww-prismic` starter:

```sh
gatsby new <PROJECT_CODE> https://github.com/WalltoWall/gatsby-starter-ww-prismic
```

Once the project is created, push the project to GitHub.

```sh
cd <PROJECT_CODE>
git init
git remote add origin git@github.com:WalltoWall/<PROJECT_CODE>.git
git push -u origin master
```

## Create projects on Netlify and Prismic

Each service needs to be configured for the project.

### Netlify

Create a new site connected to the new GitHub repository. The name of the
project should match the domain of the finished website since this will become
an accessible URL.

```
# Netlify site name
bchdesign
^^^^^^^^^

# Netlify URL
https://bchdesign.netlify.com
        ^^^^^^^^^

# Final URL
https://bchdesign.com
        ^^^^^^^^^
```

When asked, the build command should be `yarn build` (Netlify will default to `gatsby build`).

### Prismic

Create a new repository. Like Netlify, the name of the repository should match
the domain of the finished website site this will become an accessible URL.

**Note**: The URL of the repository _cannot_ be changed once created.

```
# Prismic repository name
bchdesign
^^^^^^^^^

# Prismic URL
https://bchdesign.prismic.io/
        ^^^^^^^^^
```

## Add billing info to Netlify and Prismic

Client should add billing information to Netlify and Prismic.

### Netlify

Billing URL: <https://app.netlify.com/account/settings/billing>

Client will not be charged until form submissions surpass the free tier (100
submissions/month).

### Prismic

Billing URL: <https://`REPOSITORY_NAME`.prismic.io/settings/plan/>

`REPOSITORY_NAME` is the Prismic repository name created in the previous step.

Client should select the Starter (3 users) or Small (7 users) plan depending on
the number of users needed. The client's account and `dev@walltowall.com` will
be two of the users.

## Connect `dev@walltowall.com` accounts

Client will own both Netlify and Prismic projects, but `dev@walltowall.com`
will need access to modify settings.

### Netlify

Administrators URL: <https://app.netlify.com/sites/`SITE_NAME`/settings/general#site-administrators>

`SITE_NAME` is the Netlify sit ename created in the previous step.

### Prismic

Users URL: <https://`REPOSITORY_NAME`.prismic.io/settings/users/>

`REPOSITORY_NAME` is the Prismic repository name created in the previous step.
