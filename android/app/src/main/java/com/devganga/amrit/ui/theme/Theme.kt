package com.devganga.amrit.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable

private val DarkColorScheme = darkColorScheme(
    primary = AntiqueGold,
    secondary = BrightGold,
    tertiary = HimalayanBlue,
    background = DeepNavy,
    surface = NavySurface,
    onPrimary = DeepNavy,
    onSecondary = DeepNavy,
    onTertiary = DeepNavy,
    onBackground = WarmIvory,
    onSurface = WarmIvory,
)

@Composable
fun DevGangaAmritTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = DarkColorScheme,
        content = content
    )
}
