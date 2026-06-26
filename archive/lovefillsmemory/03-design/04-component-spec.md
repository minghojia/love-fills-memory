# Component Specification｜元件規格

Version 1.0

---

# Purpose｜目的

🇺🇸

This document defines the core UI components of Love Fills Memory.

These are the building blocks of the entire product.

Every screen is composed from these components.

---

🇹🇼

本文件定義 Love Fills Memory 的核心 UI 元件。

所有畫面都由這些元件組成。

---

# 🧭 Design Principle｜設計原則

🇺🇸

Components must be:

- simple
- reusable
- emotionally calm
- low cognitive load

---

🇹🇼

元件設計必須：

- 簡單
- 可重複使用
- 情緒穩定
- 低認知負擔

---

# 🧱 CORE COMPONENTS｜核心元件

---

# 1. 📝 Entry Input Box｜輸入框

## Purpose｜目的

Main entry point for all caregiver input.

---

## Types｜輸入方式

- Text input
- Voice input
- Photo input

---

## Behavior｜行為

🇺🇸

- Expands when active
- Auto-saves after pause
- No required fields
- No submit button

🇹🇼

- 點擊後展開
- 停頓後自動儲存
- 無必填欄位
- 無提交按鈕

---

## States｜狀態

- Idle (collapsed)
- Active (expanded)
- Recording (voice)
- Processing (AI working)

---

# 2. 🎙️ Voice Recorder Component｜語音元件

## Purpose

Capture natural speech without structure.

---

## Behavior

- Hold to record
- Live transcription shown
- Auto-stop on silence

---

## Constraint

No voice identity profiling.

---

# 3. 📷 Photo Capture Component｜照片元件

## Purpose

Capture context of care moment.

---

## Accepted content

- Meals
- Environment
- Medication setup
- Objects (not faces)

---

## Behavior

- Instant upload
- Optional caption
- AI auto-description

---

# 4. 📜 Timeline Card｜時間軸卡片

## Purpose

Display care history in simplest form.

---

## Structure

Each card contains:

- Timestamp
- Short summary
- Optional icon (voice/photo/text)

---

## Example



---

## Behavior

- Tap → entry detail
- Scroll only
- No filters

---

# 5. 🤖 AI Response Panel｜AI 回應面板

## Purpose

Provide reflection + emotional support.

---

## Structure

1. Summary
2. Insight
3. Emotional support message

---

## Behavior

- Appears after entry saved
- Fades in gently
- Auto-dismiss after reading

---

# 6. 🏷️ Entry Detail View｜記錄詳情頁

## Purpose

Deep view of one care moment.

---

## Content

- Original input
- AI summary
- Timeline context
- Emotional note

---

## Behavior

- Read-only by default
- Optional edit (future)

---

# 🎨 UI STYLE RULES｜設計風格規則

## Typography

- Large readable font
- No dense text blocks

---

## Spacing

- Generous whitespace
- Calm breathing space

---

## Animation

- Slow fade-in only
- No bouncing / flashy effects

---

## Color Philosophy

- Neutral tones
- Soft contrast
- Avoid stimulation-heavy colors

---

# 🚫 WHAT WE DO NOT BUILD｜不做的事

🇺🇸

- No complex form components
- No dashboards
- No analytics widgets
- No social interaction components
- No gamification elements

---

🇹🇼

- 不做複雜表單
- 不做儀表板
- 不做數據元件
- 不做社群互動元件
- 不做遊戲化設計

---

# 🧠 DESIGN PHILOSOPHY｜設計哲學

🇺🇸

Every component must answer:

> “Does this reduce caregiver stress?”

If not → remove it.

---

🇹🇼

每個元件都要回答：

> 「這是否減輕照顧者壓力？」

否則就移除。

---

# 🌱 SUCCESS DEFINITION

🇺🇸

If a caregiver can:

- open app
- record a moment
- understand AI response

without confusion,

we succeeded.

---

🇹🇼

如果照顧者可以：

- 打開 App
- 記錄事情
- 看懂 AI 回應

且沒有困惑，

我們就成功了。

---

# 🚀 NEXT STEP

Now we move into:

## 👉 05-first-mvp-ui.md

We will design:

- actual MVP screen layout (final version)
- how components combine
- first real product UI flow
- “this is what we will actually build in code”

This is the bridge between **design and engineering**
