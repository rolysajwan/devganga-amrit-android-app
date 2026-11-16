DEVGANGA AMRIT

Native Android Application

Inspired by Devprayag. Rooted in Spiritual Heritage.

DevGanga Amrit is a premium spiritual heritage brand inspired by the sacred confluence of the Alaknanda and Bhagirathi rivers at Devprayag, Uttarakhand, India.

This repository contains the DevGanga Amrit Android application project, along with its associated web interface source code. The application presents the brand's identity, spiritual heritage, product information, and vision through a dedicated mobile experience.

🌿 About the Project

DevGanga Amrit combines traditional spiritual values with modern technology.

The Android application is designed around a premium visual identity, intuitive navigation, and a mobile-first experience. It introduces users to the brand, the sacred confluence at Devprayag, and the intended religious uses of Ganga Jal.

The product is intended for religious and ritual use only, not for drinking.

✨ Application Features

- Splash Screen — Branded introduction to the application.
- Home Screen — Brand presentation and featured content.
- Our Story — The inspiration and heritage behind DevGanga Amrit.
- Devprayag — Information about the confluence of the Alaknanda and Bhagirathi rivers.
- Product Showcase — Presentation of the 250 ml Ganga Jal bottle.
- Rituals — Information about traditional religious uses.
- Coming Soon — Pre-launch screen and notification interface.
- FAQ — Frequently asked questions.
- Contact — Email, phone dialer, and WhatsApp integration.
- About — Additional information about the brand.

🛠️ Technology Stack

Native Android Application

- Kotlin — Android application development.
- Jetpack Compose — Declarative user interface.
- Material 3 — Android UI components and styling.
- Android SDK — Android platform development.
- Gradle Kotlin DSL — Build configuration.

Web Interface

The repository also contains a web interface developed with:

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Motion

📱 Android Application Specifications

Property| Value
Application Name| DevGanga Amrit
Package Name| "com.devganga.amrit"
Minimum SDK| 26
Target SDK| 34
Version Name| 1.0.0
Version Code| 1
UI Framework| Jetpack Compose
Design System| Material 3

📂 Project Structure

devganga-amrit-android-app/
├── android/
│   ├── app/
│   │   ├── src/
│   │   │   └── main/
│   │   │       ├── java/com/devganga/amrit/
│   │   │       │   ├── MainActivity.kt
│   │   │       │   └── ui/theme/
│   │   │       ├── res/
│   │   │       └── AndroidManifest.xml
│   │   └── build.gradle.kts
│   ├── gradle/
│   ├── build.gradle.kts
│   ├── settings.gradle.kts
│   ├── gradle.properties
│   └── README_APK_BUILD.md
├── public/
│   └── assets/
├── src/
│   ├── components/
│   ├── data/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── index.html
├── tsconfig.json
├── vite.config.ts
└── README.md

🚀 Getting Started — Android App

Prerequisites

- Android Studio
- Android SDK
- A compatible Android device or emulator
- Internet connection for downloading build dependencies

Open the Android Project

1. Clone or download this repository.
2. Extract the ZIP if you downloaded it.
3. Open Android Studio.
4. Select Open.
5. Choose the repository's "android/" directory.
6. Allow Gradle to sync.
7. Start an emulator or connect an Android device.
8. Click Run to build and launch the application.

Build a Debug APK

In Android Studio:

1. Open the native Android project.
2. Select Build from the menu.
3. Choose Build Bundle(s) / APK(s).
4. Select Build APK(s).

The generated debug APK should be available at:

android/app/build/outputs/apk/debug/app-debug.apk

The build must complete successfully for the APK to be generated.

🌐 Web Interface

The repository also includes a React-based web interface.

To run it locally, install Node.js and npm, then execute the following commands from the repository root:

npm install
npm run dev

To generate a production build:

npm run build

🔒 Security

- Do not commit API keys, passwords, or private credentials.
- Keep signing keys and sensitive configuration files secure.
- Review application permissions before publishing.
- Store environment-specific secrets outside version control.

🔮 Future Development

Potential improvements include:

- Further UI/UX refinement.
- Accessibility and performance improvements.
- Additional product and brand information.
- Expanded mobile functionality.
- Testing across a wider range of Android devices.
- Preparation for a future production release.

📌 Project Status

Status: Under Development

This repository contains the source code for the DevGanga Amrit Android application and its associated web interface. Features and implementation details may evolve as development continues.

👨‍💻 Developer

Rolysajwan

GitHub: https://github.com/rolysajwan

📄 License

No open-source license has been specified. All rights are reserved by the project owner unless a license is added to this repository.

---

DEVGANGA AMRIT
Inspired by Devprayag. Rooted in Spiritual Heritage. Built for the Digital Age.
