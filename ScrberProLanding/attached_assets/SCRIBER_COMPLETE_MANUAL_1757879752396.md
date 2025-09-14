# Scriber Pro - Complete User Manual & Developer Guide

## Table of Contents

### User Manual

1. [App Overview](#app-overview)
2. [Getting Started](#getting-started)
3. [Main Features](#main-features)
4. [Library Management](#library-management)
5. [Settings & Configuration](#settings--configuration)
6. [Export & Sharing](#export--sharing)
7. [Troubleshooting](#troubleshooting)

### Developer Documentation

8. [Architecture Overview](#architecture-overview)
9. [Key Components](#key-components)
10. [Data Management](#data-management)
11. [Core Workflows](#core-workflows)
12. [UI Structure](#ui-structure)
13. [Integration Points](#integration-points)

---

# User Manual

## App Overview

**Scriber Pro** is a powerful offline transcription app for macOS that converts audio and video files into text using advanced AI technology. Built with privacy and simplicity in mind, Scriber Pro processes all transcriptions locally on your Mac without requiring an internet connection.

### Key Features

- **Offline Processing**: All transcription happens locally using Whisper.cpp technology
- **Multi-Format Support**: Extensive format support powered by FFmpeg - handles virtually any audio or video format with hundreds of codecs and containers supported
- **Multi-Format Export**: Export transcriptions in 9 different formats including TXT, JSON, SRT, VTT, CSV, RTF, Markdown, PDF, and DOCX
- **iCloud Sync**: Automatic synchronization of transcriptions across your Apple devices
- **Smart Library**: Organize transcriptions with categories, favorites, and powerful search
- **Living Orb Progress**: Beautiful, interactive progress visualization during transcription
- **Large File Support**: Automatically handles files over 59 minutes by splitting them into manageable chunks with perfect timecode continuity across all export formats.
- **Batch Operations**: Multi-select transcriptions for bulk export, sharing, or deletion

#### 					          *Speed*

Honestly, this is probably one of the fastest offline transcription applications available, with the level of simplicity and optimization that Scriber provides. Most audio under 10 minutes is transcribed in just a few seconds—often under 5 seconds- feels instant.

A limt test, I used 4.5-hour tutorial for the DAW Bitwig Studio (dense, constant voice, with occasional noise, sound disturbances, and music over the voice) was fully transcribed in exactly 3 minutes and 58 seconds: https://drive.google.com/file/d/1-7kIt7o97gypojBmgVnM8lmMQ-Wn5vY0/view?usp=sharing. The link is the source video if you wish to verify results.

### System Requirements

- macOS Ventura 13.0 or later
- Apple Silicon (M1/M2/M3) or Intel processor
- At least 2GB of available storage space
- iCloud account (optional, for sync features)

---

## Getting Started

### Installation

1. **Download**: Get Scriber Pro from the Mac App Store or directly from the developer
2. **Launch**: Open Scriber Pro from your Applications folder
3. **First Run**: The app will present you with the main transcription interface

### First Transcription

1. **Select File**: Click "Browse" or drag and drop an audio/video file onto the interface
2. **Choose Language**: The app defaults to English, but you can change this in Settings
3. **Start Transcription**: Click "Transcribe" to begin processing
4. **Monitor Progress**: Watch the beautiful Living Orb system show real-time progress
5. **Review Results**: Your transcription will appear in the output area and be automatically saved to your library

### Interface Overview

The main window consists of:

- **Header Section**: Shows app branding with animated wave glyph, current language setting, and rotating settings gear
- **File Selection**: Browse button and file path display
- **Transcribe Button**: Initiates the transcription process
- **Living Orb Progress**: Interactive progress visualization that responds to your mouse
- **Output Area**: Displays completed transcriptions with text selection enabled
- **Menu Bar**: Access to Library, Settings, and Help

---

## Main Features

### Transcription Engine

Scriber Pro uses Whisper.cpp, the optimized C++ implementation of OpenAI's Whisper model:

- **Model**: Uses the "base.en" English model for optimal speed and accuracy balance
- **Audio Processing**: Automatically converts video files to 16kHz mono WAV for optimal processing
- **Large File Handling**: Files over 59 minutes are automatically split into 55-minute chunks with seamless timestamp alignment
- **Progress Tracking**: Sophisticated progress estimation with visual feedback

### Living Orb Progress System

The signature feature of Scriber Pro is its Living Orb progress visualization:

- **Idle State**: Orbs gently pulse with organic breathing animation
- **Interactive**: Orbs respond to your mouse with proximity effects and glow
- **Processing**: Dynamic orb-by-orb progression showing transcription status
- **Completion Rush**: Satisfying final animation when transcription completes

### File Format Support

**Powered by FFmpeg - Extensive Format Support**

Scriber leverages FFmpeg's comprehensive format support, handling virtually any audio or video file with an audio track. For video files, only the audio is extracted and converted to optimal format for transcription.

**Common Audio Formats**:

- MP3, WAV, M4A, AAC, FLAC, OGG, WMA, AC3, DTS, AIFF, CAF, AU, SND

**Common Video Formats** (audio extracted):

- MP4, MOV, AVI, MKV, WebM, FLV, 3GP, ASF, WMV, MPEG, MPG, TS, M4V, F4V

**Professional/Broadcast Formats**:

- ProRes (all variants), DNxHD, DNxHR, MXF, GXF, LXF, IMF packages

**Legacy/Specialized Formats**:

- Real Media (RM, RMVB), QuickTime variants, VOB, IFO, proprietary codecs

**Streaming Formats**:

- HLS segments (M3U8/TS), DASH, RTMP captures

**Audio Processing**: All input is automatically converted to 16kHz mono PCM WAV format - the optimal configuration for Whisper transcription accuracy and speed. This ensures consistent, high-quality results regardless of the source format.

### Automatic Saving

Every transcription is automatically saved to your library with:

- Original filename preservation
- Timestamp of creation
- Language detection
- Export format preference
- File size and duration metadata

---

## Library Management

### Accessing the Library

Open your transcription library by:

- Using the menu: **File > Library** (⌘L)
- Clicking the Library button in the toolbar

### Library Interface

The library uses a three-pane design:

1. **Sidebar**: Navigate between different views and categories
2. **List View**: Browse your transcriptions with preview text and metadata
3. **Detail View**: Read and edit full transcriptions

### Sidebar Navigation

- **All Transcriptions**: View all your transcriptions
- **Favorites**: Show only favorited transcriptions
- **Recently Added**: Display your most recent transcriptions
- **Categories**: Custom organizational categories you create

### Managing Transcriptions

**Single Selection**:

- Click any transcription to view it in the detail panel
- Double-click the title (in list or detail view) to rename it
- Right-click for context menu options

**Multi-Selection**:

- Hold ⌘ and click to select multiple transcriptions
- Use Shift+click to select a range
- Selected items show with a cyan checkmark indicator

**Context Menu Options**:

- Add/Remove from Favorites
- Move to Category
- Export transcription(s)
- Share transcription(s)
- Delete transcription(s)

### Search and Filtering

Use the search bar in the toolbar to find transcriptions by:

- Filename
- Content text
- Any text within the transcription

The search is live and filters results as you type.

### Categories

Organize your transcriptions with custom categories:

1. **Create categories** through the sidebar "Add Category" button
2. **Assign transcriptions** to categories via the context menu or multi-select operations
3. **View category-specific transcriptions** by selecting from the sidebar
4. **Rename categories** by right-clicking on any category in the sidebar
5. **Delete categories** through the context menu (transcriptions remain but lose category assignment)

---

## Settings & Configuration

### Accessing Settings

Open Settings by:

- Using the menu: **Scriber Pro > Settings...** (⌘,)
- Clicking the Settings button in the main interface header

### Language Settings

**Allow Other Languages**: Toggle to enable additional language options beyond English

**Available Languages**:

- English (en) - Default
- Auto-detect (auto)
- French (fr)
- German (de)
- Spanish (es)
- Italian (it)
- Portuguese (pt)
- Russian (ru)
- Chinese (zh)
- Japanese (ja)
- Korean (ko)
- Arabic (ar)

### Output Settings

**Use Custom Save Folder**: 

- When disabled, transcriptions save next to the original media file
- When enabled, choose a specific folder for all transcription outputs
- Uses secure bookmarks to maintain access permissions

**Export Format**: Choose your default export format from available options:

- TXT - Plain text (default)
- JSON - Structured data with metadata (via Whisper native output)
- VTT - WebVTT subtitles (via Whisper native output)
- SRT - SubRip subtitles (via Whisper native output)
- CSV - Comma-separated values (via Whisper native output)

Note: RTF, Markdown, PDF, and DOCX formats are available through the Library export feature with additional formatting and styling.

### iCloud Sync Settings

**iCloud Sync Toggle**: Enable or disable automatic synchronization with custom cyan toggle styling

**Sync Status Indicator**: Shows current sync state with real-time updates:

- "Synced just now" - Recent successful sync (displayed in cyan)
- "Sync in progress..." - Currently syncing
- "Sync disabled" - iCloud sync is turned off
- Error messages for sync issues

**Auto-Sync**: Automatically triggers on all data modifications and when opening Settings

**Manual Sync**: Use the cyan cloud icon in the library toolbar to force a sync - icon brightens when synced, dims when idle

---

## Export & Sharing

### Export Formats

Scriber Pro offers comprehensive export capabilities through two different systems:

#### Library Export System (Enhanced Formats)

Available through Library → Export with advanced formatting:

**Plain Text (TXT)**:

- Clean, formatted text with proper paragraph breaks
- Universal compatibility
- Smallest file size

**Rich Text Format (RTF)**:

- Includes basic formatting and styling
- Compatible with most word processors
- Preserves document structure with timestamps

**Markdown (MD)**:

- Modern documentation format
- Includes metadata header with generation timestamp
- Perfect for technical documentation and web publishing

**PDF Document**:

- Professional formatted output with typography
- Includes title, metadata, and styled content
- Perfect for sharing and archival
- Universal compatibility

**Microsoft Word (DOCX)**:

- Full Word compatibility using Office Open XML
- Preserves formatting and structure
- Ideal for collaborative editing

#### Native Whisper Formats (Settings Default)

Available as default export format in Settings:

**JSON Data**:

- Structured format with complete metadata and timing
- Machine-readable with word-level timestamps
- Perfect for data analysis and API integration

**Comma-Separated Values (CSV)**:

- Spreadsheet-compatible format
- Includes timing data and confidence scores
- Perfect for data analysis

**SubRip (SRT)**:

- Universal subtitle format with precise timing
- Compatible with most video players
- Includes timing information

**WebVTT (VTT)**:

- Modern web subtitle standard
- Rich formatting support
- Perfect for web video

### Export Process

**From Library (Enhanced Formats)**:

1. Select transcription(s) in the library
2. Right-click and select "Export..." or use toolbar Export button
3. Choose format from dropdown (TXT, RTF, Markdown, PDF, DOCX)
4. Choose location in save dialog
5. For multiple files: creates numbered exports in selected directory

**From Main Interface (Native Formats)**:

1. Configure default export format in Settings
2. Complete transcription process
3. Files automatically save in chosen format (TXT, JSON, VTT, SRT, CSV)
4. Location determined by Settings → Custom save folder preference

### Sharing

**Built-in Sharing**:

1. Select transcription(s) in the library
2. Right-click and choose "Share..."
3. Select from macOS sharing options:
   - Mail
   - Messages
   - AirDrop
   - Copy to clipboard
   - Save to Files

**Manual Sharing**:

- Export transcriptions to your preferred format
- Share the exported files through any method you prefer

---

## Troubleshooting

### Common Issues

**Transcription Not Starting**:

- Ensure you've selected a supported audio/video file
- Check that the file isn't corrupted or password-protected
- Verify sufficient disk space is available
- Try restarting the app if it appears frozen

**Permission Errors**:

- If you receive "permission denied" errors, the app will prompt you to select an output folder
- Choose a folder where you have write permissions (like Documents or Desktop)
- Consider enabling "Use custom save folder" in Settings

**Poor Transcription Quality**:

- Ensure audio is clear with minimal background noise
- Check that the correct language is selected
- For non-English content, enable "Allow other languages" in Settings
- Files with multiple speakers or heavy accents may require manual editing

**iCloud Sync Issues**:

- Verify you're signed into iCloud on your Mac
- Check your iCloud storage isn't full
- Try toggling iCloud sync off and on in Settings
- Use the manual sync button in the library toolbar

**Large File Processing**:

- Files over 59 minutes are automatically split into chunks
- This process takes longer but ensures successful transcription
- Monitor disk space as temporary files are created during processing

### Performance Optimization

**For Best Performance**:

- Close unnecessary applications during transcription
- Ensure your Mac has adequate free storage (at least 2GB)
- Use the highest quality audio source possible
- Consider transcribing very long files during off-hours

**Memory Management**:

- The app automatically manages memory during processing
- Large files use chunked processing to prevent memory issues
- Restart the app if you notice performance degradation

### Getting Help

**Built-in Resources**:

- Access acknowledgments and license information via Help → Acknowledgments
- Animated acknowledgments window with wave animation and comprehensive license details
- Visit the official help documentation through Help → Scriber Pro Help

**Support Channels**:

- Official website: https://scriberpro.1oa.cc/about/
- Check for app updates through the Mac App Store
- Review the app's documentation for detailed technical information

---

# Developer Documentation

## Architecture Overview

Scriber Pro is built using modern Swift and SwiftUI, following Apple's recommended patterns for macOS applications. The architecture emphasizes separation of concerns, testability, and maintainability.

### Technology Stack

**Core Technologies**:

- **SwiftUI**: Modern declarative UI framework
- **SwiftData**: Apple's modern data persistence framework with CloudKit integration
- **Combine**: Reactive programming for data flow and state management
- **AppKit**: Native macOS integration where SwiftUI falls short

**External Dependencies**:

- **Whisper.cpp**: Optimized C++ implementation of OpenAI's Whisper model
- **FFmpeg**: Media processing for video-to-audio conversion
- **ZIPFoundation**: DOCX file creation (ZIP archive generation)

### Application Structure

```
Scriber/
├── ScriberApp.swift                     # Main app entry point
├── Models/
│   └── TranscriptionRecord.swift       # SwiftData models
├── Services/
│   ├── TranscriptionManager.swift      # Core transcription logic
│   ├── TranscriptionStorageManager.swift # Data persistence
│   ├── ExportManager.swift            # Export functionality
│   └── TimecodeUtilities.swift        # Chunked file timestamp adjustment
├── Views/
│   ├── ContentView.swift              # Main transcription interface
│   ├── SettingsView.swift             # Settings window
│   ├── Components/
│   │   ├── LivingOrbProgressView.swift     # Progress visualization
│   │   ├── LivingOrbProgressViewModel.swift # Progress state management
│   │   └── LiquidGlass.swift              # Glass morphism UI component
│   └── Library/
│       ├── LibraryWindow.swift         # Library main interface
│       ├── LibrarySidebar.swift        # Library navigation
│       └── TranscriptionListView.swift # Transcription list and detail
├── Resources/
│   ├── ffmpeg                         # Media conversion tool
│   ├── whisper-cli                    # Transcription engine
│   └── ggml-base.en.bin              # Whisper model file
├── Scriber.entitlements                # Sandbox permissions for production
└── WindowControllers/
    ├── SettingsWindowController.swift  # Settings window management
    └── LibraryWindowController.swift   # Library window management
```

### Design Patterns

**MVVM (Model-View-ViewModel)**:

- Views are purely declarative SwiftUI components
- ViewModels handle business logic and state management
- Models represent data structures and persistence

**Singleton Pattern**:

- `ScriberApp.shared` for global app state access
- Window controllers for managing multiple windows

**Observer Pattern**:

- Extensive use of `@Published` properties and Combine
- SwiftData's automatic change observation
- NotificationCenter for cross-component communication

---

## Key Components

### ScriberApp (Main Application)

**File**: `Scriber/Scriber/ScriberApp.swift`

The main app class that sets up the SwiftData container, handles window management, and provides global application state.

**Key Responsibilities**:

- SwiftData container configuration with CloudKit integration
- Window size and behavior management
- Menu bar customization
- Global state management via `shared` singleton

**CloudKit Configuration**:

```swift
let modelConfiguration = ModelConfiguration(
    "ScriberData",
    schema: schema,
    cloudKitDatabase: .private("iCloud.com.scriber.transcriptions")
)
```

### TranscriptionManager

**File**: `Scriber/Scriber/TranscriptionManager.swift`

The core transcription engine that orchestrates the entire transcription workflow.

**Key Responsibilities**:

- File validation and preprocessing
- Video-to-audio conversion using FFmpeg
- Large file chunking (>59 minutes)
- Whisper.cpp process management
- Progress tracking and simulation
- Format-specific output generation
- Auto-saving to library

**Process Flow**:

1. **File Validation**: Check format and accessibility
2. **Duration Analysis**: Determine if chunking is needed
3. **Audio Conversion**: Convert video files to optimal audio format
4. **Transcription**: Execute whisper-cli with appropriate parameters
5. **Post-Processing**: Format text and handle custom export formats
6. **Storage**: Auto-save to SwiftData/CloudKit

**Progress Simulation System**:

```swift
private func simulateProgress() async {
    let totalOrbs = currentOrbCount
    let baseOrbDuration = 0.5
    var currentDelay = baseOrbDuration
    
    for orbIndex in 0..<totalOrbs {
        // Progressive deceleration algorithm
        if progressPercent < 0.75 {
            currentDelay *= 1.35
        } else {
            currentDelay *= 2.0
        }
        // Update progress orb-by-orb
    }
}
```

### TranscriptionStorageManager

**File**: `Scriber/Scriber/Services/TranscriptionStorageManager.swift`

Manages all data persistence operations using SwiftData with CloudKit synchronization.

**Key Responsibilities**:

- SwiftData model operations (CRUD)
- CloudKit availability checking
- Sync status management
- Category management
- Search functionality
- Data integrity maintenance

**CloudKit Integration**:

```swift
private func checkCloudKitAvailability() {
    Task {
        let container = CKContainer(identifier: "iCloud.com.scriber.transcriptions")
        let accountStatus = try await container.accountStatus()
        // Handle different account states
    }
}
```

### LivingOrbProgressView & ViewModel

**Files**: 

- `Scriber/Scriber/Views/Components/LivingOrbProgressView.swift`
- `Scriber/Scriber/Views/Components/LivingOrbProgressViewModel.swift`

The signature progress visualization system with interactive animations.

**Animation States**:

- **Idle**: Organic breathing animation with mouse interaction
- **Processing**: Orb-by-orb progression with dynamic timing
- **Drop Confirm**: File drop acknowledgment animation
- **Progress Rush**: Final completion animation
- **Boost Glow**: Enhanced visibility for long operations

**Interactive Features**:

- Mouse proximity detection
- Real-time glow and scale adjustments
- Smooth state transitions
- Performance-optimized rendering

### ExportManager

**File**: `Scriber/Scriber/Services/ExportManager.swift`

Handles export functionality for multiple file formats with sophisticated file type handling.

**Supported Export Formats**:

```swift
enum ExportFormat: String, CaseIterable {
    case txt = "txt"        // Plain text
    case rtf = "rtf"        // Rich Text Format
    case markdown = "md"    // Markdown
    case pdf = "pdf"        // PDF Document
    case docx = "docx"      // Microsoft Word
}
```

**Export Process**:

1. Format selection through save panel accessory view
2. Dynamic file extension correction
3. Format-specific conversion
4. Batch export for multiple files
5. Native share sheet integration

---

## Data Management

### SwiftData Models

**TranscriptionRecord** - Primary data model for transcriptions:

```swift
@Model
class TranscriptionRecord: Hashable {
    var id: UUID = UUID()
    var createdAt: Date = Date()
    var updatedAt: Date = Date()
    var originalFileName: String = ""
    var transcriptionText: String = ""
    var exportFormat: String = "txt"
    var language: String = "en"
    var duration: TimeInterval?
    var fileSize: Int64?
    var originalFilePath: String?
    var iCloudFilePath: String?
    
    // Organization features
    var tags: [String] = []
    var isFavorite: Bool = false
    var category: String?
}
```

**TranscriptionCategory** - Category management:

```swift
@Model
class TranscriptionCategory: Hashable {
    var id: UUID = UUID()
    var name: String = ""
    var createdAt: Date = Date()
    var color: String?
    var iconName: String?
}
```

### CloudKit Integration

**Configuration**:

- Private database: `iCloud.com.scriber.transcriptions`
- Automatic sync with SwiftData
- Conflict resolution through SwiftData's built-in mechanisms
- Account status monitoring and error handling

**Data Flow**:

1. Local operations update SwiftData
2. SwiftData automatically syncs with CloudKit
3. Changes propagate to other devices
4. UI updates through SwiftData's observation system

### Search and Filtering

**Search Implementation**:

```swift
func fetchTranscriptions(searchText: String) -> [TranscriptionRecord] {
    let predicate = #Predicate<TranscriptionRecord> { record in
        record.transcriptionText.localizedStandardContains(searchText) ||
        record.originalFileName.localizedStandardContains(searchText)
    }
    let descriptor = FetchDescriptor<TranscriptionRecord>(
        predicate: predicate,
        sortBy: [SortDescriptor(\.createdAt, order: .reverse)]
    )
    return try modelContext.fetch(descriptor)
}
```

**Category Filtering**:

```swift
func fetchTranscriptions(for category: String) -> [TranscriptionRecord] {
    let predicate = #Predicate<TranscriptionRecord> { record in
        record.category == category
    }
    // Execute fetch with predicate
}
```

---

## Core Workflows

### Transcription Workflow

1. **File Selection**:
   - User selects file via browse dialog or drag-and-drop
   - File validation and type detection
   - Display selected file path

2. **Pre-Processing**:
   - Check file duration for chunking decision (AV KIT)
   - Video files: Convert to 16kHz mono WAV using FFmpeg
   - Audio files: Use directly if compatible, otherwise convert

3. **Transcription Execution**:
   - Build single whisper-cli command with appropriate parameters
   - Launch process asynchronously
   - Monitor process output and handle errors
   - Implement progress simulation for UI feedback

4. **Post-Processing**:
   - Read transcription output from temporary files
   - Apply text formatting for readability
   - Convert to custom formats if needed (PDF, DOCX, etc.)
   - Save to user-specified location

5. **Library Integration**:
   - Auto-save to SwiftData with metadata
   - Trigger CloudKit sync
   - Update UI with completion status

### Large File Handling

For files exceeding 59 minutes:

1. **Chunking Strategy**:

   ```swift
   let chunkDuration: Double = 55 * 60 // 55 minutes per chunk
   let totalChunks = Int(ceil(totalDuration / chunkDuration))
   ```

2. **FFmpeg Segmentation**:

   - Single FFmpeg call creates all chunks
   - Segments named: `chunk_000.wav`, `chunk_001.wav`, etc.
   - Consistent audio format across all chunks
   - temp files removed upon completion

3. **Sequential Processing**:

   - Process each chunk individually through Whisper, but as a single custom built commmand  with appropriate parameters
   - Combine transcripts seamlessly with `TimecodeUtilities.swift`
   - Automatic timestamp adjustment for continuity across chunks
   - Clean up temporary files after processing
   - User just sees a single file being transcribed, single output, unaware chuking took place

4. **Timecode Continuity** (Production Feature):

   - **JSON**: Word-level timestamps adjusted with millisecond precision
   - **VTT/SRT**: Subtitle timecodes continue seamlessly across chunks  
   - **CSV**: Raw millisecond values properly offset for multi-hour content
   - **Offset Calculation**: Chunk N adds (N × 3,300,440ms) to all timestamps

5. **Progress Tracking**:

   - Overall progress across all chunks
   - Per-chunk progress indication with smooth UI animations
   - Estimated time remaining

### Export Workflow

1. **Format Selection**:
   - Save panel with format picker accessory view
   - Dynamic file extension enforcement
   - Content type validation

2. **Conversion Process**:
   - Text-based formats: Direct string manipulation
   - PDF: Core Graphics rendering with proper typography
   - DOCX: ZIP archive creation with Office Open XML structure
   - RTF: NSAttributedString conversion

3. **Batch Operations**:
   - Multi-file export with sequential numbering
   - Directory creation for batch exports
   - Progress indication for large operations

---

## UI Structure

### Window Management

**Main Window**:

- Fixed minimum size: 550x685 points
- Hidden title bar with unified toolbar style
- Non-restorable to prevent state persistence issues
- Centered on screen at launch

**Settings Window**:

- Managed by `SettingsWindowController` singleton
- Modal presentation over main window
- Persistent settings via @AppStorage

**Library Window**:

- Managed by `LibraryWindowController` singleton
- Three-pane navigation split view
- Independent window lifecycle

### SwiftUI View Hierarchy

```
ContentView (Main Transcription Interface)
├── headerView
│   ├── Settings button with animated wave glyph
│   └── Language indicator
├── LiquidGlass card container
│   ├── File selection controls
│   ├── Transcribe button
│   ├── Status indicators
│   ├── LivingOrbProgressView
│   ├── Error display
│   └── TranscriptionDropArea
└── Background gradient

LibraryWindow (Transcription Management)
├── NavigationSplitView
│   ├── LibrarySidebar (categories, filters)
│   ├── TranscriptionListView (list with search)
│   └── TranscriptionDetailView (full text view)
└── Toolbar with sync and actions

SettingsView (Configuration)
├── Language settings
├── Output path configuration
├── Export format selection
└── iCloud sync controls
```

### Custom UI Components

**LiquidGlass**: Glass morphism container component

```swift
struct LiquidGlass<Content: View>: View {
    let title: String
    let content: Content
    
    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            Text(title).font(.title2).fontWeight(.semibold)
            content
        }
        .padding(24)
        .background(glassBackground)
    }
}
```

**GlassPillButtonStyle**: Consistent button styling throughout the app

- Glass morphism effect with blur and transparency
- Hover and pressed state animations
- Consistent sizing and padding

### Accessibility Features

**VoiceOver Support**:

- All interactive elements properly labeled
- Progress information announced during transcription
- File selection state communicated clearly

**Keyboard Navigation**:

- Full keyboard accessibility for all UI elements
- Appropriate tab order and focus management
- Keyboard shortcuts for common actions (⌘L for library, ⌘, for settings)

---

## Integration Points

### Whisper.cpp Integration

**Binary Location**: `Scriber/Scriber/Resources/whisper-cli`

**Model File**: `Scriber/Scriber/Resources/ggml-base.en.bin`

**Process Execution**:

```swift
let arguments = [
    "-m", modelFile,           // Model path
    "-f", audioURL.path,       // Input file
    "-l", language,            // Language code
    outputFlag,                // Output format flag
    "-of", outputBaseName.path // Output file base name
]

let process = Process()
process.executableURL = URL(fileURLWithPath: whisperPath)
process.arguments = arguments
```

**Output Formats Supported by Whisper**:

- `--output-txt`: Plain text
- `--output-json`: JSON with timing data
- `--output-vtt`: WebVTT subtitles
- `--output-srt`: SubRip subtitles
- `--output-csv`: Comma-separated values

### FFmpeg Integration

**Binary Location**: `Scriber/Scriber/Resources/ffmpeg`

**Video-to-Audio Conversion**:

```swift
process.arguments = [
    "-i", inputURL.path,
    "-acodec", "pcm_s16le",    // 16-bit PCM
    "-ar", "16000",            // 16kHz sample rate
    "-ac", "1",                // Mono channel
    "-y",                      // Overwrite output
    outputURL.path
]
```

**Segmentation for Large Files**:

```swift
process.arguments = [
    "-i", inputURL.path,
    "-f", "segment",           // Segment muxer
    "-segment_time", "3300",   // 55 minutes
    "-acodec", "pcm_s16le",
    "-ar", "16000",
    "-ac", "1",
    "-y",
    tempDir.appendingPathComponent("chunk_%03d.wav").path
]
```

### File Format Generation

**PDF Generation** (Core Graphics):

```swift
func convertToPdf(_ text: String) async throws -> Data {
    let mutableData = NSMutableData()
    guard let consumer = CGDataConsumer(data: mutableData) else {
        throw TranscriptionError.customFormatNotImplemented("Failed to create PDF consumer")
    }
    
    var pageRect = CGRect(x: 0, y: 0, width: 612, height: 792)
    guard let context = CGContext(consumer: consumer, mediaBox: &pageRect, nil) else {
        throw TranscriptionError.customFormatNotImplemented("Failed to create PDF context")
    }
    
    context.beginPDFPage(nil)
    // Text rendering with Core Text
    context.endPDFPage()
    context.closePDF()
    
    return mutableData as Data
}
```

**DOCX Generation** (ZIP Archive):

```swift
func convertToDocx(_ text: String) async throws -> Data {
    // Create Office Open XML structure
    let documentXml = """
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
      <w:body>
        <w:p><w:r><w:t>\(escapedText)</w:t></w:r></w:p>
      </w:body>
    </w:document>
    """
    
    // Package as ZIP archive using ZIPFoundation
    return try await createZipArchive(files: [
        ("[Content_Types].xml", contentTypesXml),
        ("_rels/.rels", relsXml),
        ("word/document.xml", documentXml)
    ])
}
```

### Error Handling and Recovery

**File Permission Issues**:

- Automatic fallback to user-selected output directory
- Security-scoped bookmarks for persistent access
- Clear error messaging with resolution steps

**Process Failures**:

- Whisper process monitoring with timeout handling
- FFmpeg failure recovery with alternative parameters
- Graceful degradation when optional features fail

**Memory Management**:

- Automatic chunking prevents memory exhaustion
- Temporary file cleanup in all code paths
- Process termination on app quit or cancellation

### Performance Optimizations

**Background Processing**:

- All transcription work happens on background queues with async/await
- UI updates dispatched to main actor
- Process monitoring without blocking UI thread using continuation patterns
- Prevents animation freezing during chunked file processing

**Resource Management**:

- Temporary files cleaned up automatically
- Process termination on cancellation
- Memory-efficient large file handling

**User Experience**:

- Progressive progress indication
- Responsive cancellation
- Graceful error recovery

---

This comprehensive manual provides both users and developers with detailed understanding of Scriber Pro's capabilities, implementation, and architecture. The app demonstrates excellent engineering practices with its offline-first approach, sophisticated progress visualization, comprehensive export options, and seamless iCloud integration.