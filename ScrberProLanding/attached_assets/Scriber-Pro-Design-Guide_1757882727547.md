# Scriber Pro - Brand & Design Guidelines

## Brand Identity

**Product Name**: Scriber Pro  
**Tagline**: "Offline transcription, beautifully simple."  
**Positioning**: Premium, offline-first transcription tool for macOS professionals

---

## Color Palette

### Primary App Colors
- **Accent Cyan**: `#00FFFF` (SwiftUI `.cyan`) - Primary brand color for UI highlights, buttons, sync status, Living Orbs
- **Dark Background**: `#070A13` (RGB: 7,10,19) - Primary dark background
- **Darker Background**: `#080E1A` (RGB: 8,14,26) - Secondary dark background for depth

### UI Colors & Opacities
- **White Overlays**: 
  - `#FFFFFF` at 18% opacity - Glass morphism highlights
  - `#FFFFFF` at 10% opacity - Button fills  
  - `#FFFFFF` at 8% opacity - Divider lines
  - `#FFFFFF` at 6% opacity - Subtle backgrounds
- **Cyan Variations**:
  - `#00FFFF` at 90% opacity - Active toggle states
  - `#00FFFF` at 30% opacity - Inactive toggle states  
  - `#00FFFF` at 20% opacity - Selection backgrounds
  - `#00FFFF` at 15% opacity - List row highlights
  - `#00FFFF` at 18% opacity - Glass accent highlights
- **System Colors**:
  - White - Main text in dark mode
  - 50% Gray - Secondary text and metadata
  - `#FF453A` - Error states and delete actions
  - `#007AFF` - Navigation links

### Marketing Background Gradients
- **Purple Sunset**: `#8B5CF6` → `#EC4899` (Purple to Pink)
- **Ocean Blue**: `#0EA5E9` → `#06B6D4` (Sky Blue to Cyan)  
- **Mint Fresh**: `#10B981` → `#06D6A0` (Green to Mint)
- **Warm Teal**: `#14B8A6` → `#0891B2` (Teal variations)

---

## Living Orb System - Exact Recreation Guide

### Orb Specifications
- **Size**: 12×12 points fixed frame
- **Shape**: Perfect circle with radial gradient fill
- **Spacing**: 8 points between orbs
- **Container**: Horizontal padding of 30 points, centered alignment

### Orb Gradient Structure
```
RadialGradient:
- Center: .center
- Start Radius: 1 point
- End Radius: 10 points
- Colors (from center to edge):
  1. Cyan (#00FFFF) at full opacity × brightness value
  2. Cyan (#00FFFF) at 60% × brightness value  
  3. Cyan (#00FFFF) at 20% × brightness value
```

### Animation States & Brightness Values
- **Idle Breathing**: 0.3-0.7 brightness, 3.5 second ease-in-out cycle
- **Mouse Proximity**: 0.8-1.0 brightness, 1.0-1.3 scale, 3-8 glow radius
- **Processing**: Sequential 0.1→1.0 brightness per orb
- **Boost Glow**: Enhanced brightness up to 1.2 for long operations
- **Completion Rush**: Rapid 1.0 brightness wave across all orbs

### Glow Effect
```
Shadow:
- Color: Cyan (#00FFFF) at 80% × brightness
- Radius: 2-8 points (varies by state)
- Offset: (0, 0) - centered glow
- No spread
```

### Interactive Behavior
- **Hover Zone**: 32×32 point invisible hit area per orb
- **Proximity Detection**: Real-time mouse distance calculation
- **Spring Animation**: 0.6 response, 0.8 damping for state changes
- **Timing**: 0.8 second easeInOut for glow transitions

---

## Glass Morphism Components

### LiquidGlass Card Structure
```
Background Stack:
1. Ultra Thin Material (.ultraThinMaterial)
2. 20-point continuous corner radius
3. White border at 10% opacity
4. Black shadow: 50% opacity, 30pt radius, 10pt Y offset
5. Animated ornament overlay with blur(24pt) and plusLighter blend
```

### Glass Card Layout
- **Header**: 12pt padding, waveform icon + title
- **Divider**: White at 8% opacity
- **Content**: 16pt internal padding
- **Title Font**: System 13pt medium weight, secondary color

### Glass Button Style
```
GlassPillButtonStyle:
- Font: System 12pt medium weight
- Padding: 6pt vertical, 14pt horizontal  
- Background: Capsule filled with white at 10% opacity
- Border: White at 20% opacity
- Shadow: Black 50% opacity, 12pt radius, 6pt Y offset
- Pressed State: 85% opacity
```

### Animated Ornament Background
```
Ornament Components:
1. RadialGradient: White 18% opacity, moving center (28%±6%, 22%±6%)
2. RadialGradient: Cyan 18% opacity, moving center (70%±6%, 82%±6%)  
3. AngularGradient: White 6% opacity, centered
Animation: 8-second ease-in-out, infinite autoreverse
```

---

## Waveform Animation

### WaveformIconAnimated Specifications
- **Frame**: 24×10 points fixed size
- **Bars**: 7 bars, 1pt width, 2pt spacing
- **Heights**: [0.25, 0.65, 0.95, 0.55, 0.85, 0.75, 0.10] × container height
- **Animation**: `sin(time × speed + index × 1.6)` with 25% amplitude
- **Color**: Cyan at 85% opacity
- **Shape**: Capsule bars, center-anchored scaling

### Animation Parameters
- **Speed**: 6.0 (cycles per second)
- **Amplitude**: 0.6 (scale multiplier)
- **Phase Offset**: 1.6 radians between bars
- **Minimum Height**: 2 points per bar

---

## Typography

### System Font Usage
- **App Interface**: San Francisco (system default)
- **Weights**: Regular, Medium, Semibold, Bold
- **Sizes**: Follow macOS Human Interface Guidelines
- **Colors**: Primary (white), Secondary (50% gray), Accent (cyan)

### Text Hierarchy
- **Headlines**: System font, semibold/bold, white
- **Body Text**: System font, regular, white/secondary
- **UI Labels**: System font, medium, appropriate semantic colors
- **Metadata**: System font, regular, secondary color

---

## Layout Specifications

### Spacing System
- **Base Unit**: 8 points
- **Card Padding**: 16-24 points (2-3 base units)
- **Element Spacing**: 8-16 points (1-2 base units)
- **Window Margins**: 30 points minimum

### Component Sizing
- **Orbs**: 12×12 points (fixed)
- **Buttons**: Auto-height with 6pt vertical padding
- **Glass Cards**: 20pt corner radius (continuous style)
- **Icons**: 24×10 points (waveform), standard SF Symbols elsewhere

---

## Animation Principles

### Timing Functions
- **Organic Breathing**: `easeInOut(duration: 3.5).repeatForever(autoreverses: true)`
- **Interactive Response**: `spring(response: 0.6, dampingFraction: 0.8)`
- **State Changes**: `easeInOut(duration: 0.8)`
- **Processing Sequences**: `linear` with calculated delays

### Animation Values
- **Brightness Range**: 0.1 (dim) to 1.2 (bright boost)
- **Scale Range**: 1.0 (normal) to 1.3 (proximity)
- **Glow Range**: 2pt (subtle) to 8pt (prominent)

---

## Brand Voice

### Messaging Tone
- **Professional** yet **approachable**
- **Confident** in technical capabilities
- **Privacy-focused** (offline processing emphasis)
- **Performance-oriented** (speed claims with proof)

### Key Value Propositions
- **"4.5-hour videos transcribed in under 4 minutes"**
- **"Complete offline processing - your data never leaves your Mac"**
- **"Professional-grade accuracy with beautiful simplicity"**
- **"Living Orb progress system - transcription made mesmerizing"**

---

## Cross-Platform Recreation Instructions

### Rounded Rectangle Construction

#### SwiftUI (Native)
```swift
RoundedRectangle(cornerRadius: 20, style: .continuous)
```

#### CSS/Web Implementation
```css
.scriber-card {
  border-radius: 20px;
  /* Use this for closer continuous curve approximation */
  border-radius: 20px 20px 20px 20px / 20px 20px 20px 20px;
}

/* Alternative for smoother curves */
.scriber-card-smooth {
  border-radius: 24px;
  clip-path: inset(0 round 20px);
}
```

#### Photoshop/Design Tools
1. **Rectangle Tool** → Draw base shape
2. **Properties Panel** → Set corner radius to **20px**
3. **Corner Type**: Select **Rounded** (not circular)
4. For smoother curves: Use **24px radius** then apply slight **Gaussian Blur** at 0.5px

#### Figma/Sketch
- **Corner Radius**: 20px
- **Corner Smoothing**: 60% (approximates iOS continuous curves)
- **Border Radius Type**: Mixed/Independent corners all set to 20px

### Background Gradients Recreation

#### Primary App Background (Dark)
**Colors**: `#070A13` → `#080E1A`
**Direction**: Top to Bottom (90°)

##### CSS Implementation
```css
.app-background {
  background: linear-gradient(180deg, #070A13 0%, #080E1A 100%);
}
```

##### Photoshop Gradient
1. **Gradient Tool** → **Linear Gradient**
2. **Angle**: 90° (top to bottom)
3. **Color Stops**: 
   - 0%: `#070A13` (RGB: 7, 10, 19)
   - 100%: `#080E1A` (RGB: 8, 14, 26)

#### Marketing Background Gradients

##### Purple Sunset
```css
.purple-sunset {
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
}
```

##### Ocean Blue  
```css
.ocean-blue {
  background: linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%);
}
```

##### Mint Fresh
```css
.mint-fresh {
  background: linear-gradient(135deg, #10B981 0%, #06D6A0 100%);
}
```

### Glass Morphism Effect Recreation

#### CSS Glass Effect
```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);
}

/* Animated ornament overlay */
.glass-ornament {
  background: 
    radial-gradient(circle at 28% 22%, rgba(255, 255, 255, 0.18) 0%, transparent 50%),
    radial-gradient(circle at 70% 82%, rgba(0, 255, 255, 0.18) 0%, transparent 50%);
  filter: blur(24px);
  mix-blend-mode: plus-lighter;
}
```

#### Photoshop Glass Effect
1. **Base Shape**: Rounded rectangle (20px radius)
2. **Fill**: 5% white (`#FFFFFF` at 5% opacity)
3. **Stroke**: 1px, 10% white (`#FFFFFF` at 10% opacity)
4. **Drop Shadow**: 
   - Color: Black (`#000000`)
   - Opacity: 50%
   - Distance: 10px
   - Size: 30px
5. **Inner Glow**:
   - Color: White (`#FFFFFF`)  
   - Opacity: 18%
   - Size: 2px
   - Source: Edge
6. **Background Blur**: Apply **Gaussian Blur** 10px to content behind

#### Figma Glass Effect
1. **Fill**: White with 5% opacity
2. **Stroke**: 1px white at 10% opacity  
3. **Effects**:
   - **Drop Shadow**: X:0, Y:10, Blur:30, Color:#000000 50%
   - **Background Blur**: 10px
   - **Inner Shadow**: X:0, Y:1, Blur:0, Color:#FFFFFF 18%

### Orb Radial Gradient

#### CSS Radial Gradient
```css
.living-orb {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(0, 255, 255, 1) 8%,     /* Center - full cyan */
    rgba(0, 255, 255, 0.6) 60%,  /* Mid - 60% cyan */
    rgba(0, 255, 255, 0.2) 100%  /* Edge - 20% cyan */
  );
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.8);
}
```

#### Photoshop Orb Creation
1. **Circle**: 12×12px perfect circle
2. **Radial Gradient**:
   - Center: Full cyan (`#00FFFF`)
   - 60% position: 60% opacity cyan
   - Edge: 20% opacity cyan
3. **Outer Glow**:
   - Color: Cyan (`#00FFFF`)
   - Opacity: 80%
   - Size: 8px
   - Spread: 0%

### Animation Recreation

#### CSS Breathing Animation
```css
@keyframes orb-breathing {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}

.living-orb {
  animation: orb-breathing 3.5s ease-in-out infinite;
}
```

#### Waveform Animation
```css
@keyframes waveform-pulse {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.6); }
}

.waveform-bar {
  width: 1px;
  background: rgba(0, 255, 255, 0.85);
  border-radius: 0.5px;
  animation: waveform-pulse 0.167s ease-in-out infinite;
}

/* Stagger delays for 7 bars */
.waveform-bar:nth-child(1) { animation-delay: 0s; }
.waveform-bar:nth-child(2) { animation-delay: 0.027s; }
.waveform-bar:nth-child(3) { animation-delay: 0.054s; }
/* ... continue pattern ... */
```

#### After Effects Recreation
1. **Orb Breathing**: 
   - Opacity: 30% → 70% → 30%
   - Scale: 100% → 105% → 100%
   - Duration: 3.5 seconds
   - Easing: Easy Ease (similar to ease-in-out)

2. **Waveform Bars**:
   - Scale Y: 100% → 160% → 100% 
   - Stagger: 0.027s between bars
   - Loop: Continuous

---

## Advanced Animation System - Living Orb States

### Complete Animation State Definitions

#### 1. Idle State (Default)
```css
.orb.idle-glow {
  background: rgba(0, 255, 255, 0.20);
  box-shadow: 0 0 4px rgba(0, 255, 255, 0.25);
  opacity: 0.20;
  transform: scale(0.85);
  animation: advancedIdlePulse 4s ease-in-out infinite;
}

@keyframes advancedIdlePulse {
  0%, 100% { opacity: 0.16; transform: scale(0.85); }
  25% { opacity: 0.20; transform: scale(0.88); }
  50% { opacity: 0.24; transform: scale(0.91); }
  75% { opacity: 0.22; transform: scale(0.89); }
}
```

#### 2. Processing State
```css
.orb.processing {
  background: rgba(0, 255, 255, 0.4);
  box-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
  opacity: 0.35;
  transform: scale(0.9);
  animation: advancedProcessingPulse 2s ease-in-out infinite;
}
```

#### 3. Progress Active State (Rush Effect)
```css
.orb.progress-active {
  background: #00ffff;
  box-shadow: 0 0 12px #00ffff, 0 0 20px rgba(0, 255, 255, 0.6);
  opacity: 1.0;
  transform: scale(1.0);
  animation: progressRush 0.4s ease-out;
}

@keyframes progressRush {
  0% { 
    background: rgba(0, 255, 255, 0.7);
    transform: scale(0.95);
    opacity: 0.8;
  }
  100% { 
    background: #00ffff;
    transform: scale(1.0);
    opacity: 1.0;
  }
}
```

#### 4. Boost Glow State (Long Operations)
```css
.orb.progress-boost {
  background: rgba(0, 255, 255, 0.6);
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
  opacity: 0.45;
  transform: scale(0.95);
  animation: advancedBoostPulse 1.8s ease-in-out infinite;
}
```

#### 5. Power-On Effect (Initialization)
```css
.orb.power-on {
  background: #00ffff;
  opacity: 0.4;
  transform: scale(1.1);
  animation: powerOnFlicker 0.8s ease-in-out;
}

@keyframes powerOnFlicker {
  0% { opacity: 0.3; transform: scale(0.8); box-shadow: none; }
  20% { opacity: 1; transform: scale(1.05); box-shadow: 0 0 8px #00ffff; }
  40% { opacity: 0.7; transform: scale(0.95); box-shadow: 0 0 5px #00ffff; }
  60% { opacity: 1; transform: scale(1.1); box-shadow: 0 0 12px #00ffff; }
  100% { opacity: 1; transform: scale(1.1); box-shadow: 0 0 15px #00ffff; }
}
```

### T-1000 Liquid Metal Scan System

Advanced idle animations that create organic "living" behavior:

#### Left-to-Right Scan
```css
@keyframes t1000ScanLeftToRight {
  0%, 95% { opacity: 0.16; transform: scale(0.85); }
  8% { opacity: 0.26; transform: scale(0.90); }
  15% { opacity: 0.30; transform: scale(0.94); 
        box-shadow: 0 0 8px rgba(0, 255, 255, 0.35), 0 0 6px rgba(255, 255, 255, 0.2); }
  22% { opacity: 0.28; transform: scale(0.88); }
  30% { opacity: 0.18; transform: scale(0.86); }
}
```

#### Implementation Pattern
- **Timing**: 15-60 second random delays between scans
- **Direction**: Left-to-right, right-to-left, bidirectional, glitchy
- **Stagger**: 140-150ms between orbs
- **Overlay**: Applied on top of base idle animation

### Waveform Animation System

#### Pattern Array (Exact SwiftUI Match)
```javascript
const pattern = [0.25, 0.65, 0.95, 0.55, 0.85, 0.75, 0.10];
```

#### Animation Formula
```javascript
// Matches SwiftUI: sin(time × speed + index × 1.6)
const baseHeight = Math.max(2, pattern[i] * containerHeight);
const scale = 1.0 + amplitude * Math.sin(time * speed + i * 1.6);
bar.style.height = `${baseHeight}px`;
bar.style.transform = `scaleY(${scale})`;
```

#### Waveform Specifications
- **Container Size**: 24×10px (WaveformIconAnimated), 20×12px (WaveGlyphAnimated)
- **Bar Width**: 1px with 2px spacing
- **Speed**: 6.0 cycles per second
- **Amplitude**: 0.6 (LiquidGlass), 0.2 (ContentView header)
- **Color**: `rgba(0, 255, 255, 0.85)`
- **Phase Offset**: 1.6 radians between bars

### Progress Rush Wave Effect

#### Wave Timing Calculation
```javascript
// Creates organic wave-like progression
const waveOffset = Math.sin(orbIndex * 0.3) * 0.3;
const staggeredDelay = baseDelay + (baseDelay * waveOffset);
```

#### Rush Effects Sequence
1. **Individual Pop**: Scale to 130% then back to 100% (120ms)
2. **Glow Surge**: Enhanced glow for 180ms
3. **Trailing Effect**: Previous orbs get residual glow
4. **Final Wave**: All orbs pulse together (8ms stagger)

### Living Animation Randomization

#### Random Animation Assignment
- **70% of orbs** get living animations
- **Random delays**: 2-15 seconds before first animation  
- **Random duration**: 8-25 seconds per animation cycle
- **Random gaps**: 10-45 seconds between animations
- **4 Animation types**: Rush1, Rush2, Rush3, Shimmer

#### Organic Timing System
```javascript
// Creates natural, non-mechanical timing
const organicDelay = Math.sin(index * 0.2) * 100 + (index * 8);
const randomGap = 4000 + Math.random() * 21000;
const randomDuration = 8 + Math.random() * 17;
```

### State Transition Timing

#### Animation Durations
- **Power-On Flicker**: 0.8s ease-in-out
- **Processing Transition**: 15ms stagger per orb
- **Progress Rush**: 1.0-1.2s total wave
- **Boost Activation**: 20ms stagger per orb
- **Fade Out**: 2-step process (400ms gap between phases)
- **Idle Return**: Organic timing with sine wave delays

#### CSS Transition Specifications
```css
/* State changes */
transition: all 0.3s ease;

/* Interactive responses */
transition: all 0.2s ease;

/* Fade transitions */  
transition: all 2s ease-out;
```

---

## Technical Implementation Notes

### SwiftUI Code Patterns
```swift
// Primary background gradient
LinearGradient(
    colors: [
        Color(red: 7/255, green: 10/255, blue: 19/255),
        Color(red: 8/255, green: 14/255, blue: 26/255)
    ],
    startPoint: .top,
    endPoint: .bottom
)

// Cyan accent color
Color.cyan // #00FFFF

// Glass material
.background(.ultraThinMaterial)
.overlay(RoundedRectangle(cornerRadius: 20).stroke(Color.white.opacity(0.1)))
```

### Shadow Specifications
```swift
.shadow(
    color: Color.black.opacity(0.5),
    radius: 30,
    x: 0,
    y: 10
)
```

---

## Asset Requirements

### File Formats Needed
- **Vector Graphics**: SVG or PDF for scalability
- **Raster Images**: PNG with transparency support
- **Videos**: MP4 H.264 for web compatibility
- **Fonts**: System fonts only (San Francisco family)

### Resolution Guidelines
- **1x**: Base resolution for standard displays
- **2x**: Retina display support
- **3x**: High-density display support
- **Marketing**: 4K/5K resolution for presentation materials

---

*This guide provides exact specifications for recreating Scriber Pro's distinctive visual elements, ensuring pixel-perfect consistency across all marketing materials and brand touchpoints.*