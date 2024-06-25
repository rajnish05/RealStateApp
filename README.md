# RealStateApp

>RealStateApp is a mobile application built with React Native that allows users to browse a list of houses and view details about each house. It features a login flow for authentication and provides location-based functionality to unlock detailed information about houses when the user is near them.

### Features
- Authentication: User login flow using Firebase Authentication.
- House List: Browse a list of houses available for viewing.
- House Detail: View detailed information about each house.
- Location-based Unlock: Unlock additional house details if the user is near the location.

## Installation
Follow these steps to run RealstateApp on your local machine:

1. Clone the repository:
```
https://github.com/rajnish05/RealStateApp.git
cd RealStateApp
```
2. Install dependencies:
```
npm install
# or
yarn
```
3. Install Pod dependencies
```
cd ios/
pod install
cd ../
```
4. Run the application:
```
npx react-native run-ios
```
* Follow the instructions in the console to run the app on iOS emulator/device.

## Usage

1. Login:
   * Upon launching the app, users are prompted to log in using their credentials.
   * If new, users can sign up to create an account.

2. House List:
   * After logging in, users can see a list of available houses.
   * Clicking on a house navigates to the house detail screen.

3. House Detail:
   * View detailed information about the selected house.
   * if the user's current locationis within 30m of the home, an unlock button appears to reveal additional details.

 ## Technologies Used
  * React Native
  * Firebase (Authentication, Firestore)
  * React Navigation
  * Geolocation
  
