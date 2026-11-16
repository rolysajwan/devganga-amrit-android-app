# DevGanga Amrit — Android APK Generation Guide

This project is prepared with the complete native Android project structure in the `android/` directory, ready to build and generate a working APK for **DevGanga Amrit: Sacred Ganga Jal from Devprayag Sangam**.

---

## 📱 Project Specifications
- **App Name:** DEVGANGA AMRIT
- **Package Name:** `com.devganga.amrit`
- **Minimum SDK:** 26 (Android 8.0 Oreo)
- **Target SDK:** 34 (Android 14/15)
- **Framework:** Kotlin 2.0 + Jetpack Compose + Material 3
- **Color Palette:** Deep Navy (`#061022`), Navy Surface (`#09152B`), Antique Gold (`#C5A059`), Bright Gold (`#D4AF37`), Warm Ivory (`#FBF9F4`)

---

## 🚀 How to Generate the Working APK

### Method 1: Using Android Studio (Recommended)
1. In AI Studio, open the top-right Settings menu and click **Export to ZIP** or **Export to GitHub**.
2. Unzip the project on your computer.
3. Open **Android Studio** (Hedgehog, Iguana, or Ladybug).
4. Click **Open** and select the `android/` directory.
5. Let Gradle sync dependencies automatically.
6. In the top menu, go to **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
7. Click **locate** when the build completes to grab your generated APK:
   `android/app/build/outputs/apk/debug/app-debug.apk`

---

### Method 2: Using the Command Line / Terminal
Open your terminal in the `android/` directory:

```bash
cd android

# Grant execution permissions (macOS/Linux)
chmod +x gradlew

# Build Debug APK
./gradlew assembleDebug
```

On Windows:
```cmd
cd android
gradlew.bat assembleDebug
```

The APK will be located at:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 📿 Verified Screens Included
1. **Splash Screen:** Centered DevGanga Amrit logo, gold shimmer, auto-transition.
2. **Home Screen:** Hero presentation, floating 250 ml sacred bottle, mandatory religious notice, "COMING SOON" and "DISCOVER OUR STORY" CTAs.
3. **Our Story Screen:** The divine confluence of Alaknanda and Bhagirathi at Devprayag, Tehri Garhwal.
4. **Devprayag Screen:** Animated confluence visualizer (`ALAKNANDA + BHAGIRATHI ↓ DEVPRAYAG ↓ GANGA`).
5. **Product Screen:** 250 ml bottle showcase, sample price ₹299 (MRP ₹349), prominent notice: `FOR RELIGIOUS & RITUAL USE ONLY • NOT FOR DRINKING`.
6. **Rituals Screen:** Premium cards for Puja, Abhishek, Havan, Tarpan, Shraddh, Festivals.
7. **Coming Soon Screen:** Sacred pre-launch typography with "Notify Me" priority dialog.
8. **FAQ Screen:** Polished accordion answering bottle size, Devprayag origin, and ritual use.
9. **Contact Screen:** Email (`devgangaamrit@gmail.com`), Phone (`+91 96433 45474`), WhatsApp intent integration.
10. **About Screen:** Sacred provenance, Himalayan reverence, eco-conscious stewardship.
