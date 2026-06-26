# Entry Flow｜記錄流程設計

Version 1.0

---

# Purpose｜目的

🇺🇸

This document defines what happens after a caregiver starts an entry.

We design for:

> speed, simplicity, emotional safety

Not for complexity.

---

🇹🇼

本文件定義照顧者開始記錄之後的流程。

設計目標是：

> 快速、簡單、情緒安全

而不是複雜功能。

---

# 🧭 Core Principle｜核心原則

🇺🇸

The caregiver should never think about the system.

Only about the moment they are recording.

---

🇹🇼

照顧者不應該思考系統，

只需要專注在「正在發生的事情」。

---

# ✍️ Entry Trigger｜開始記錄

When user taps input box:

## System opens ONE unified input mode

Not three separate flows.

One adaptive interface.

---

🇹🇼

當使用者點擊輸入框時：

## 系統只開啟一個統一輸入介面

不是三個不同流程。

而是一個自適應介面。

---

# 🎙️ Voice Flow｜語音流程

## Step 1 — Start speaking

🇺🇸

User holds mic and speaks freely.

No structure required.

---

🇹🇼

使用者按住麥克風即可說話，

不需要格式。

---

## Step 2 — Real-time transcription

🇺🇸

Speech is converted into text instantly.

User sees text appear.

---

🇹🇼

語音即時轉成文字，

讓使用者看到內容。

---

## Step 3 — Auto-clean structure (AI)

🇺🇸

AI quietly reformats:

- key event
- emotional tone
- possible tags

But does NOT interrupt user.

---

🇹🇼

AI 在背景中整理：

- 事件重點
- 情緒語氣
- 潛在分類

但不打斷使用者。

---

## Step 4 — Save automatically

🇺🇸

No confirmation button required.

System saves when user stops speaking.

---

🇹🇼

不需要按「儲存」。

停止說話後自動保存。

---

# ✍️ Text Flow｜文字流程

## Step 1 — Free writing

🇺🇸

User types anything:

> “Mom didn’t eat lunch again”

No restrictions.

---

🇹🇼

使用者自由輸入：

> 「媽媽今天又不吃午餐」

沒有規則限制。

---

## Step 2 — Auto-save after pause

System detects pause → saves entry.

---

系統偵測停頓 → 自動儲存。

---

# 📷 Photo Flow｜照片流程

## Step 1 — Take or upload photo

🇺🇸

User takes photo:

- meal
- environment
- medication setup

---

🇹🇼

使用者拍攝或上傳：

- 餐點
- 環境
- 用藥狀態

---

## Step 2 — AI interpretation

🇺🇸

AI generates:

- description
- context understanding
- emotional summary

---

🇹🇼

AI 生成：

- 內容描述
- 情境理解
- 情緒摘要

---

## Step 3 — Optional caption

🇺🇸

User may add text, but not required.

---

🇹🇼

使用者可以補充文字，但不是必要。

---

# 🤖 AI Response Timing｜AI 回應時間

## Critical design rule:

🇺🇸

AI response must NOT feel instant robotic.

We introduce a small delay:

> 1–3 seconds

to simulate reflection.

---

🇹🇼

AI 回應不能太像機器瞬間反應。

需要 1–3 秒延遲，

讓使用者感覺「有被理解」。

---

# 💬 AI Output Structure｜AI 輸出結構

Each entry produces:

## 1. Summary｜摘要
What happened

## 2. Insight｜洞察
Possible pattern or note

## 3. Emotional Support｜情緒支持
Gentle human message

---

# Example

🇺🇸

> Summary:
Mom refused lunch today.

> Insight:
This has happened 3 times this week.

> Support:
You’re noticing important patterns. That matters.

---

🇹🇼

> 摘要：
媽媽今天不吃午餐。

> 洞察：
這週已經發生三次。

> 支持：
你正在觀察到重要變化，這很重要。

---

# 🚫 What We Avoid｜刻意避免

🇺🇸

- No forms
- No required fields
- No “submit” pressure
- No multi-step wizard
- No confirmation overload

---

🇹🇼

- 不做表單
- 不設必填欄位
- 不要「提交壓力」
- 不做多步驟流程
- 不要過多確認

---

# 🧠 Design Philosophy｜設計哲學

🇺🇸

We are designing:

> “thinking disappears, expression remains”

---

🇹🇼

我們設計的是：

> 「思考消失，表達留下」

---

# 🌱 Success Definition

🇺🇸

If a caregiver can record a moment in:

> under 10 seconds

without thinking about the app,

we succeeded.

---

🇹🇼

如果照顧者能在：

> 10 秒內完成記錄

而不需要思考操作，

我們就成功了。

---

# 🚀 Next Step

Now we move into the first **real UI structure draft**

## 👉 03-ui-wireframe.md

We will define:

- actual layout (like Apple Notes style)
- input box placement
- timeline positioning
- AI response UI behavior

This is where we begin translating everything into a **visual product**
