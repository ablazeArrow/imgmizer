# imgmizer

node project for Images manaipulation, required for Udacity Nanodegre, full stack web development.

## dependencies
- express
- sharp
## devDependencies
- multer
- prettier
- eslint
- typescript
- Jasmine
- supertest

## Scripts
to Install all packages needed and atart the server.

```
cd imgmizer
npm install
npm run start
```
to format the code

```
npm run prettier
```
to lint the code

```
npm run lint
```

to test and compile typescript

```
npm run test
```

to run production code (entry point) 

```
npm run prod
or 
node /build/src/index.js
```



## How to use it
1. start the server 
2. navigat to linke provided in terminal locallhost:<port>
3. fill form entries width, height, image file
4. then submit the form 
5. the response will be generated link to the resized image, click on it and the image will display.

#### Application Entry Point
Go to [imgmizer](http://localhost:4321/api/image?filename=fjord.jpg&width=200&height=300)


## issus
- if you click to the generated link to see the processed image, no link provided to back to form or navigate to gallery page.

## future features
- Allow resizing and removing color.

## source code
  Go to [getHub-repo](https://github.com/dg-ska/imgmizer.git)

#### Note: 
- gallery link on homepage display all processed images.
- home link in gallery page return you to the form again.

## License

MIT

**SKA, Saber Kassem Ali**
