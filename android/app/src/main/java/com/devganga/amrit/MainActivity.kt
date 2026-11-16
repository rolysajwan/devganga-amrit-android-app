package com.devganga.amrit

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.devganga.amrit.ui.theme.*
import kotlinx.coroutines.delay

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            DevGangaAmritTheme {
                MainAppScreen(
                    onEmailIntent = { email ->
                        val intent = Intent(Intent.ACTION_SENDTO).apply {
                            data = Uri.parse("mailto:$email")
                            putExtra(Intent.EXTRA_SUBJECT, "DevGanga Amrit Sacred Ganga Jal Inquiry")
                        }
                        startActivity(intent)
                    },
                    onPhoneIntent = { phone ->
                        val intent = Intent(Intent.ACTION_DIAL).apply {
                            data = Uri.parse("tel:$phone")
                        }
                        startActivity(intent)
                    },
                    onWhatsAppIntent = { phone ->
                        val intent = Intent(Intent.ACTION_VIEW).apply {
                            data = Uri.parse("https://wa.me/$phone")
                        }
                        startActivity(intent)
                    }
                )
            }
        }
    }
}

enum class Screen {
    SPLASH, HOME, STORY, DEVPRAYAG, PRODUCT, RITUALS, COMING_SOON, FAQ, CONTACT, ABOUT
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MainAppScreen(
    onEmailIntent: (String) -> Unit,
    onPhoneIntent: (String) -> Unit,
    onWhatsAppIntent: (String) -> Unit
) {
    var currentScreen by remember { mutableStateOf(Screen.SPLASH) }
    val screenStack = remember { mutableStateListOf<Screen>() }
    var showNotifyDialog by remember { mutableStateOf(false) }

    fun navigateTo(screen: Screen) {
        if (screen != currentScreen) {
            screenStack.add(currentScreen)
            currentScreen = screen
        }
    }

    fun handleBack() {
        if (showNotifyDialog) {
            showNotifyDialog = false
            return
        }
        if (screenStack.isNotEmpty()) {
            currentScreen = screenStack.removeLast()
        } else if (currentScreen != Screen.HOME) {
            currentScreen = Screen.HOME
        }
    }

    if (currentScreen == Screen.SPLASH) {
        LaunchedEffect(Unit) {
            delay(2200)
            currentScreen = Screen.HOME
        }
        SplashScreenComposable(onProceed = { currentScreen = Screen.HOME })
    } else {
        Scaffold(
            containerColor = DeepNavy,
            bottomBar = {
                NavigationBar(
                    containerColor = DeepNavy,
                    tonalElevation = 8.dp
                ) {
                    NavigationBarItem(
                        selected = currentScreen == Screen.HOME,
                        onClick = { navigateTo(Screen.HOME) },
                        icon = { Icon(Icons.Default.Home, contentDescription = "Home") },
                        label = { Text("Home", fontSize = 10.sp) },
                        colors = NavigationBarItemDefaults.colors(
                            selectedIconColor = BrightGold,
                            selectedTextColor = BrightGold,
                            unselectedIconColor = MutedSlate,
                            unselectedTextColor = MutedSlate,
                            indicatorColor = NavySurface
                        )
                    )
                    NavigationBarItem(
                        selected = currentScreen == Screen.PRODUCT,
                        onClick = { navigateTo(Screen.PRODUCT) },
                        icon = { Icon(Icons.Default.WaterDrop, contentDescription = "Ganga Jal") },
                        label = { Text("Ganga Jal", fontSize = 10.sp) },
                        colors = NavigationBarItemDefaults.colors(
                            selectedIconColor = BrightGold,
                            selectedTextColor = BrightGold,
                            unselectedIconColor = MutedSlate,
                            unselectedTextColor = MutedSlate,
                            indicatorColor = NavySurface
                        )
                    )
                    NavigationBarItem(
                        selected = currentScreen == Screen.DEVPRAYAG,
                        onClick = { navigateTo(Screen.DEVPRAYAG) },
                        icon = { Icon(Icons.Default.Landscape, contentDescription = "Devprayag") },
                        label = { Text("Devprayag", fontSize = 10.sp) },
                        colors = NavigationBarItemDefaults.colors(
                            selectedIconColor = BrightGold,
                            selectedTextColor = BrightGold,
                            unselectedIconColor = MutedSlate,
                            unselectedTextColor = MutedSlate,
                            indicatorColor = NavySurface
                        )
                    )
                    NavigationBarItem(
                        selected = currentScreen == Screen.RITUALS,
                        onClick = { navigateTo(Screen.RITUALS) },
                        icon = { Icon(Icons.Default.AutoAwesome, contentDescription = "Rituals") },
                        label = { Text("Rituals", fontSize = 10.sp) },
                        colors = NavigationBarItemDefaults.colors(
                            selectedIconColor = BrightGold,
                            selectedTextColor = BrightGold,
                            unselectedIconColor = MutedSlate,
                            unselectedTextColor = MutedSlate,
                            indicatorColor = NavySurface
                        )
                    )
                    NavigationBarItem(
                        selected = currentScreen in listOf(Screen.STORY, Screen.COMING_SOON, Screen.FAQ, Screen.CONTACT, Screen.ABOUT),
                        onClick = { navigateTo(Screen.STORY) },
                        icon = { Icon(Icons.Default.Menu, contentDescription = "More") },
                        label = { Text("More", fontSize = 10.sp) },
                        colors = NavigationBarItemDefaults.colors(
                            selectedIconColor = BrightGold,
                            selectedTextColor = BrightGold,
                            unselectedIconColor = MutedSlate,
                            unselectedTextColor = MutedSlate,
                            indicatorColor = NavySurface
                        )
                    )
                }
            }
        ) { paddingValues ->
            Box(modifier = Modifier.padding(paddingValues).fillMaxSize()) {
                when (currentScreen) {
                    Screen.HOME -> HomeScreenComposable(
                        onNavigate = { navigateTo(it) },
                        onOpenNotify = { showNotifyDialog = true }
                    )
                    Screen.STORY -> OurStoryComposable(onBack = { handleBack() }, onToDevprayag = { navigateTo(Screen.DEVPRAYAG) })
                    Screen.DEVPRAYAG -> DevprayagComposable(onBack = { handleBack() })
                    Screen.PRODUCT -> ProductComposable(onBack = { handleBack() }, onOpenNotify = { showNotifyDialog = true })
                    Screen.RITUALS -> RitualsComposable(onBack = { handleBack() }, onOpenNotify = { showNotifyDialog = true })
                    Screen.COMING_SOON -> ComingSoonComposable(onBack = { handleBack() }, onOpenNotify = { showNotifyDialog = true })
                    Screen.FAQ -> FAQComposable(onBack = { handleBack() })
                    Screen.CONTACT -> ContactComposable(
                        onBack = { handleBack() },
                        onEmail = { onEmailIntent("devgangaamrit@gmail.com") },
                        onPhone = { onPhoneIntent("+919643345474") },
                        onWhatsApp = { onWhatsAppIntent("919643345474") }
                    )
                    Screen.ABOUT -> AboutComposable(onBack = { handleBack() }, onOpenNotify = { showNotifyDialog = true })
                    else -> {}
                }
            }
        }
    }

    if (showNotifyDialog) {
        NotifyDialogComposable(onDismiss = { showNotifyDialog = false })
    }
}

@Composable
fun SplashScreenComposable(onProceed: () -> Unit) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(DeepNavy)
            .clickable { onProceed() },
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center,
            modifier = Modifier.padding(24.dp)
        ) {
            Box(
                modifier = Modifier
                    .size(120.dp)
                    .clip(CircleShape)
                    .background(NavySurface)
                    .border(2.dp, AntiqueGold, CircleShape),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    Icons.Default.WaterDrop,
                    contentDescription = "Logo",
                    tint = BrightGold,
                    modifier = Modifier.size(56.dp)
                )
            }
            Spacer(modifier = Modifier.height(24.dp))
            Text(
                text = "DEVGANGA AMRIT",
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                color = WarmIvory,
                letterSpacing = 4.sp
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "SACRED GANGA JAL FROM DEVPRAYAG",
                fontSize = 11.sp,
                fontWeight = FontWeight.Medium,
                color = AntiqueGold,
                letterSpacing = 2.sp
            )
        }
    }
}

@Composable
fun HomeScreenComposable(onNavigate: (Screen) -> Unit, onOpenNotify: () -> Unit) {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .background(DeepNavy)
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        item {
            Text(
                text = "DEVGANGA AMRIT",
                fontSize = 26.sp,
                fontWeight = FontWeight.Bold,
                color = WarmIvory,
                letterSpacing = 3.sp,
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = "Sacred Ganga Jal from Devprayag Sangam",
                fontSize = 13.sp,
                color = BrightGold,
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "A premium presentation inspired by the timeless spiritual tradition of Devprayag, created for religious and ritual use.",
                fontSize = 12.sp,
                color = MutedSlate,
                textAlign = TextAlign.Center,
                modifier = Modifier.padding(horizontal = 16.dp)
            )
            Spacer(modifier = Modifier.height(24.dp))

            // 250 ml Bottle Container
            Card(
                colors = CardDefaults.cardColors(containerColor = NavySurface),
                modifier = Modifier
                    .fillMaxWidth()
                    .height(240.dp)
                    .border(1.dp, AntiqueGold.copy(alpha = 0.4f), RoundedCornerShape(16.dp)),
                shape = RoundedCornerShape(16.dp)
            ) {
                Column(
                    modifier = Modifier.fillMaxSize(),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.Center
                ) {
                    Icon(
                        Icons.Default.WaterDrop,
                        contentDescription = "250 ml Sacred Bottle",
                        tint = BrightGold,
                        modifier = Modifier.size(80.dp)
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                    Text("DevGanga Amrit 250 ml", color = WarmIvory, fontWeight = FontWeight.Bold)
                    Text("Sample Price: ₹299 (MRP ₹349)", color = BrightGold, fontSize = 12.sp)
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Warning Notice Banner
            Card(
                colors = CardDefaults.cardColors(containerColor = Color(0xFF0C1626)),
                modifier = Modifier
                    .fillMaxWidth()
                    .border(1.dp, WarningRed.copy(alpha = 0.5f), RoundedCornerShape(12.dp)),
                shape = RoundedCornerShape(12.dp)
            ) {
                Column(
                    modifier = Modifier.padding(12.dp).fillMaxWidth(),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        "FOR RELIGIOUS & RITUAL USE ONLY",
                        color = Color(0xFFF2C078),
                        fontWeight = FontWeight.Bold,
                        fontSize = 11.sp
                    )
                    Text(
                        "NOT FOR DRINKING",
                        color = WarningRed,
                        fontWeight = FontWeight.Bold,
                        fontSize = 11.sp
                    )
                }
            }

            Spacer(modifier = Modifier.height(20.dp))

            // Primary CTA: COMING SOON
            Button(
                onClick = onOpenNotify,
                colors = ButtonDefaults.buttonColors(containerColor = BrightGold),
                modifier = Modifier.fillMaxWidth().height(48.dp),
                shape = RoundedCornerShape(12.dp)
            ) {
                Text("COMING SOON — NOTIFY ME", color = DeepNavy, fontWeight = FontWeight.Bold)
            }

            Spacer(modifier = Modifier.height(10.dp))

            // Secondary CTA: DISCOVER OUR STORY
            OutlinedButton(
                onClick = { onNavigate(Screen.STORY) },
                colors = ButtonDefaults.outlinedButtonColors(contentColor = WarmIvory),
                border = androidx.compose.foundation.BorderStroke(1.dp, AntiqueGold),
                modifier = Modifier.fillMaxWidth().height(48.dp),
                shape = RoundedCornerShape(12.dp)
            ) {
                Text("DISCOVER OUR STORY", fontWeight = FontWeight.SemiBold)
            }
        }
    }
}

@Composable
fun OurStoryComposable(onBack: () -> Unit, onToDevprayag: () -> Unit) {
    LazyColumn(
        modifier = Modifier.fillMaxSize().background(DeepNavy).padding(16.dp)
    ) {
        item {
            IconButton(onClick = onBack) {
                Icon(Icons.Default.ArrowBack, contentDescription = "Back", tint = AntiqueGold)
            }
            Text("HERITAGE & PROVENANCE", color = AntiqueGold, fontSize = 10.sp, letterSpacing = 2.sp)
            Spacer(modifier = Modifier.height(4.dp))
            Text("WHERE THE RIVERS MEET, TRADITION BEGINS.", color = WarmIvory, fontSize = 22.sp, fontWeight = FontWeight.Bold)
            Spacer(modifier = Modifier.height(12.dp))
            Text(
                "Perched in the Garhwal Himalayas at an elevation of 830 meters, Devprayag marks one of the most sacred confluences in India. Here, the energetic Bhagirathi and the calm Alaknanda unite to form the sacred river traditionally known as the Ganga.",
                color = MutedSlate,
                fontSize = 13.sp,
                lineHeight = 20.sp
            )
            Spacer(modifier = Modifier.height(16.dp))
            Button(
                onClick = onToDevprayag,
                colors = ButtonDefaults.buttonColors(containerColor = NavySurface),
                modifier = Modifier.fillMaxWidth().border(1.dp, AntiqueGold, RoundedCornerShape(12.dp))
            ) {
                Text("View Devprayag Confluence Visualizer", color = WarmIvory)
            }
        }
    }
}

@Composable
fun DevprayagComposable(onBack: () -> Unit) {
    LazyColumn(
        modifier = Modifier.fillMaxSize().background(DeepNavy).padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        item {
            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.Start) {
                IconButton(onClick = onBack) {
                    Icon(Icons.Default.ArrowBack, contentDescription = "Back", tint = AntiqueGold)
                }
            }
            Text("THE ORIGIN", color = AntiqueGold, fontSize = 11.sp, letterSpacing = 3.sp)
            Text("DEVPRAYAG, UTTARAKHAND", color = WarmIvory, fontSize = 22.sp, fontWeight = FontWeight.Bold)
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                "At Devprayag, the Alaknanda and Bhagirathi meet, forming the river traditionally known as the Ganga.",
                color = MutedSlate,
                fontSize = 12.sp,
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(24.dp))

            // Diagram Box
            Card(
                colors = CardDefaults.cardColors(containerColor = NavySurface),
                modifier = Modifier.fillMaxWidth().border(1.dp, AntiqueGold, RoundedCornerShape(16.dp)),
                shape = RoundedCornerShape(16.dp)
            ) {
                Column(
                    modifier = Modifier.padding(20.dp).fillMaxWidth(),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceAround
                    ) {
                        Text("ALAKNANDA", color = HimalayanBlue, fontWeight = FontWeight.Bold)
                        Text("+", color = BrightGold, fontWeight = FontWeight.Bold)
                        Text("BHAGIRATHI", color = HimalayanBlue, fontWeight = FontWeight.Bold)
                    }
                    Spacer(modifier = Modifier.height(12.dp))
                    Text("↓", color = BrightGold, fontSize = 20.sp)
                    Spacer(modifier = Modifier.height(12.dp))
                    Card(
                        colors = CardDefaults.cardColors(containerColor = DeepNavy),
                        modifier = Modifier.border(1.dp, AntiqueGold, RoundedCornerShape(8.dp))
                    ) {
                        Text(
                            "DEVPRAYAG SANGAM",
                            color = BrightGold,
                            fontWeight = FontWeight.Bold,
                            modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp)
                        )
                    }
                    Spacer(modifier = Modifier.height(12.dp))
                    Text("↓", color = BrightGold, fontSize = 20.sp)
                    Spacer(modifier = Modifier.height(12.dp))
                    Text("SACRED GANGA", color = WarmIvory, fontWeight = FontWeight.Bold, fontSize = 20.sp, letterSpacing = 3.sp)
                }
            }
        }
    }
}

@Composable
fun ProductComposable(onBack: () -> Unit, onOpenNotify: () -> Unit) {
    LazyColumn(
        modifier = Modifier.fillMaxSize().background(DeepNavy).padding(16.dp)
    ) {
        item {
            IconButton(onClick = onBack) {
                Icon(Icons.Default.ArrowBack, contentDescription = "Back", tint = AntiqueGold)
            }
            Text("DEVGANGA AMRIT", color = WarmIvory, fontSize = 24.sp, fontWeight = FontWeight.Bold)
            Text("Sacred Ganga Jal from Devprayag Sangam", color = BrightGold, fontSize = 13.sp)
            Spacer(modifier = Modifier.height(8.dp))
            Text("Bottle: 250 ml Sacred Presentation", color = MutedSlate, fontSize = 12.sp)
            Text("Sample Price: ₹299 (MRP: ₹349)", color = WarmIvory, fontSize = 14.sp, fontWeight = FontWeight.SemiBold)
            Text("Status: COMING SOON", color = BrightGold, fontSize = 12.sp, fontWeight = FontWeight.Bold)

            Spacer(modifier = Modifier.height(16.dp))

            Card(
                colors = CardDefaults.cardColors(containerColor = Color(0xFF0C1626)),
                modifier = Modifier.fillMaxWidth().border(1.dp, WarningRed, RoundedCornerShape(12.dp))
            ) {
                Column(modifier = Modifier.padding(12.dp), horizontalAlignment = Alignment.CenterHorizontally) {
                    Text("FOR RELIGIOUS & RITUAL USE ONLY", color = Color(0xFFF2C078), fontWeight = FontWeight.Bold, fontSize = 12.sp)
                    Text("NOT FOR DRINKING", color = WarningRed, fontWeight = FontWeight.Bold, fontSize = 12.sp)
                }
            }

            Spacer(modifier = Modifier.height(20.dp))

            Button(
                onClick = onOpenNotify,
                colors = ButtonDefaults.buttonColors(containerColor = BrightGold),
                modifier = Modifier.fillMaxWidth().height(48.dp),
                shape = RoundedCornerShape(12.dp)
            ) {
                Text("NOTIFY ME", color = DeepNavy, fontWeight = FontWeight.Bold)
            }
        }
    }
}

@Composable
fun RitualsComposable(onBack: () -> Unit, onOpenNotify: () -> Unit) {
    val rituals = listOf(
        "Puja" to "Purification of altar, vessels, and daily offerings before divine prayer.",
        "Abhishek" to "Ceremonial holy bathing of Shiva Lingam and consecrated deities.",
        "Havan" to "Sacred water achamana and purification before fire ceremonies.",
        "Tarpan" to "Vedic libation rites to honor ancestral pitras and rishis.",
        "Shraddh" to "Memorial rites and purification rituals honoring departed elders.",
        "Festivals" to "Griha Pravesh, Diwali, Navratri, Maha Shivratri, and new beginnings."
    )

    LazyColumn(
        modifier = Modifier.fillMaxSize().background(DeepNavy).padding(16.dp)
    ) {
        item {
            IconButton(onClick = onBack) {
                Icon(Icons.Default.ArrowBack, contentDescription = "Back", tint = AntiqueGold)
            }
            Text("SACRED TRADITION", color = AntiqueGold, fontSize = 10.sp, letterSpacing = 2.sp)
            Text("RITUAL USES", color = WarmIvory, fontSize = 24.sp, fontWeight = FontWeight.Bold)
            Spacer(modifier = Modifier.height(12.dp))
        }

        items(rituals) { (title, desc) ->
            Card(
                colors = CardDefaults.cardColors(containerColor = NavySurface),
                modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp).border(1.dp, AntiqueGold.copy(alpha = 0.3f), RoundedCornerShape(12.dp)),
                shape = RoundedCornerShape(12.dp)
            ) {
                Column(modifier = Modifier.padding(14.dp)) {
                    Text(title, color = BrightGold, fontWeight = FontWeight.Bold, fontSize = 14.sp)
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(desc, color = MutedSlate, fontSize = 12.sp)
                }
            }
        }
    }
}

@Composable
fun ComingSoonComposable(onBack: () -> Unit, onOpenNotify: () -> Unit) {
    Box(
        modifier = Modifier.fillMaxSize().background(DeepNavy).padding(20.dp),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Text("SOMETHING SACRED", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = WarmIvory, letterSpacing = 3.sp)
            Text("IS ON ITS WAY.", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = BrightGold, letterSpacing = 3.sp)
            Spacer(modifier = Modifier.height(20.dp))
            Text("DEVGANGA AMRIT", fontSize = 24.sp, fontWeight = FontWeight.Bold, color = WarmIvory, letterSpacing = 4.sp)
            Spacer(modifier = Modifier.height(12.dp))
            Text("COMING SOON", fontSize = 14.sp, fontWeight = FontWeight.Bold, color = AntiqueGold, letterSpacing = 3.sp)
            Spacer(modifier = Modifier.height(28.dp))
            Button(
                onClick = onOpenNotify,
                colors = ButtonDefaults.buttonColors(containerColor = BrightGold),
                modifier = Modifier.fillMaxWidth().height(48.dp),
                shape = RoundedCornerShape(12.dp)
            ) {
                Text("NOTIFY ME", color = DeepNavy, fontWeight = FontWeight.Bold)
            }
        }
    }
}

@Composable
fun FAQComposable(onBack: () -> Unit) {
    val faqs = listOf(
        "What is DevGanga Amrit?" to "DevGanga Amrit is sacred Ganga Jal sourced from the Sangam of Devprayag in Uttarakhand, packed for religious rites.",
        "Where is it associated with?" to "It is associated with Devprayag, Tehri Garhwal, Uttarakhand, India.",
        "What is the bottle size?" to "It is presented in an elegant 250 ml sacred bottle.",
        "What is it intended for?" to "It is intended strictly for Hindu religious and ritual use such as Puja, Abhishek, Havan, and Tarpan.",
        "Is it for drinking?" to "No. DevGanga Amrit is intended for religious and ritual use only. It is not sold as drinking water.",
        "When will it launch?" to "It is currently in pre-launch stage ('Coming Soon'). Register interest with 'Notify Me'."
    )

    LazyColumn(modifier = Modifier.fillMaxSize().background(DeepNavy).padding(16.dp)) {
        item {
            IconButton(onClick = onBack) {
                Icon(Icons.Default.ArrowBack, contentDescription = "Back", tint = AntiqueGold)
            }
            Text("FREQUENTLY ASKED QUESTIONS", color = WarmIvory, fontSize = 20.sp, fontWeight = FontWeight.Bold)
            Spacer(modifier = Modifier.height(16.dp))
        }
        items(faqs) { (q, a) ->
            Card(
                colors = CardDefaults.cardColors(containerColor = NavySurface),
                modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp).border(1.dp, AntiqueGold.copy(alpha = 0.25f), RoundedCornerShape(12.dp))
            ) {
                Column(modifier = Modifier.padding(14.dp)) {
                    Text(q, color = BrightGold, fontWeight = FontWeight.SemiBold, fontSize = 13.sp)
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(a, color = MutedSlate, fontSize = 12.sp)
                }
            }
        }
    }
}

@Composable
fun ContactComposable(
    onBack: () -> Unit,
    onEmail: () -> Unit,
    onPhone: () -> Unit,
    onWhatsApp: () -> Unit
) {
    LazyColumn(
        modifier = Modifier.fillMaxSize().background(DeepNavy).padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        item {
            Row(modifier = Modifier.fillMaxWidth()) {
                IconButton(onClick = onBack) {
                    Icon(Icons.Default.ArrowBack, contentDescription = "Back", tint = AntiqueGold)
                }
            }
            Text("DEVGANGA AMRIT", color = WarmIvory, fontSize = 24.sp, fontWeight = FontWeight.Bold)
            Spacer(modifier = Modifier.height(6.dp))
            Text("Devprayag, Tehri Garhwal, Uttarakhand, India", color = AntiqueGold, fontSize = 12.sp)
            Spacer(modifier = Modifier.height(16.dp))
            Text("Email: devgangaamrit@gmail.com", color = MutedSlate, fontSize = 13.sp)
            Text("Phone: +91 96433 45474", color = MutedSlate, fontSize = 13.sp)
            Spacer(modifier = Modifier.height(24.dp))

            Button(
                onClick = onEmail,
                colors = ButtonDefaults.buttonColors(containerColor = NavySurface),
                modifier = Modifier.fillMaxWidth().height(48.dp).border(1.dp, AntiqueGold, RoundedCornerShape(12.dp))
            ) {
                Text("EMAIL US", color = WarmIvory)
            }
            Spacer(modifier = Modifier.height(10.dp))
            Button(
                onClick = onPhone,
                colors = ButtonDefaults.buttonColors(containerColor = NavySurface),
                modifier = Modifier.fillMaxWidth().height(48.dp).border(1.dp, AntiqueGold, RoundedCornerShape(12.dp))
            ) {
                Text("CALL US", color = WarmIvory)
            }
            Spacer(modifier = Modifier.height(10.dp))
            Button(
                onClick = onWhatsApp,
                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF1B6E44)),
                modifier = Modifier.fillMaxWidth().height(48.dp),
                shape = RoundedCornerShape(12.dp)
            ) {
                Text("WHATSAPP", color = Color.White, fontWeight = FontWeight.Bold)
            }
        }
    }
}

@Composable
fun AboutComposable(onBack: () -> Unit, onOpenNotify: () -> Unit) {
    LazyColumn(modifier = Modifier.fillMaxSize().background(DeepNavy).padding(16.dp)) {
        item {
            IconButton(onClick = onBack) {
                Icon(Icons.Default.ArrowBack, contentDescription = "Back", tint = AntiqueGold)
            }
            Text("ABOUT DEVGANGA AMRIT", color = WarmIvory, fontSize = 22.sp, fontWeight = FontWeight.Bold)
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                "DevGanga Amrit represents authentic sacred Ganga Jal from the Alaknanda and Bhagirathi confluence at Devprayag, Tehri Garhwal, Uttarakhand. Packaged with reverent care in 250 ml sealed bottles for traditional Hindu ceremonies.",
                color = MutedSlate,
                fontSize = 13.sp,
                lineHeight = 20.sp
            )
            Spacer(modifier = Modifier.height(16.dp))
            Text("Sample Price: ₹299 (MRP ₹349)", color = BrightGold, fontWeight = FontWeight.Bold)
            Text("FOR RELIGIOUS & RITUAL USE ONLY • NOT FOR DRINKING", color = WarningRed, fontSize = 11.sp, fontWeight = FontWeight.Bold)
        }
    }
}

@Composable
fun NotifyDialogComposable(onDismiss: () -> Unit) {
    var name by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    var phone by remember { mutableStateOf("") }
    var submitted by remember { mutableStateOf(false) }

    AlertDialog(
        onDismissRequest = onDismiss,
        containerColor = NavySurface,
        title = {
            Text(
                if (submitted) "Har Har Gange!" else "Notify Me — Pre-Launch",
                color = WarmIvory,
                fontWeight = FontWeight.Bold
            )
        },
        text = {
            if (!submitted) {
                Column(modifier = Modifier.fillMaxWidth()) {
                    Text("Register to receive priority notice when DevGanga Amrit 250 ml is bottled.", color = MutedSlate, fontSize = 12.sp)
                    Spacer(modifier = Modifier.height(8.dp))
                    OutlinedTextField(
                        value = name,
                        onValueChange = { name = it },
                        label = { Text("Your Name", fontSize = 11.sp) },
                        modifier = Modifier.fillMaxWidth()
                    )
                    OutlinedTextField(
                        value = email,
                        onValueChange = { email = it },
                        label = { Text("Email", fontSize = 11.sp) },
                        modifier = Modifier.fillMaxWidth()
                    )
                    OutlinedTextField(
                        value = phone,
                        onValueChange = { phone = it },
                        label = { Text("Mobile Number", fontSize = 11.sp) },
                        modifier = Modifier.fillMaxWidth()
                    )
                }
            } else {
                Text("Thank you, $name. Your interest in DevGanga Amrit has been recorded.", color = WarmIvory)
            }
        },
        confirmButton = {
            if (!submitted) {
                Button(
                    onClick = { submitted = true },
                    colors = ButtonDefaults.buttonColors(containerColor = BrightGold)
                ) {
                    Text("Register", color = DeepNavy)
                }
            } else {
                Button(
                    onClick = onDismiss,
                    colors = ButtonDefaults.buttonColors(containerColor = BrightGold)
                ) {
                    Text("Close", color = DeepNavy)
                }
            }
        },
        dismissButton = {
            if (!submitted) {
                TextButton(onClick = onDismiss) {
                    Text("Cancel", color = MutedSlate)
                }
            }
        }
    )
}
