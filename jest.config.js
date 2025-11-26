export default {
  testEnvironment: "node",
   moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.js$": "babel-jest"
  }
};