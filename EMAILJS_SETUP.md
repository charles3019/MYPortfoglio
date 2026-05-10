# EmailJS Setup Guide

Your contact form is now integrated with **EmailJS**. Follow these steps to set it up and get your portfolio working at 100%.

## Step 1: Create an EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Create an Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Choose your email provider (Gmail recommended)
4. Select **Gmail** and **Connect Account**
5. Follow the prompts to authenticate
6. Copy your **Service ID** (looks like: `service_xxxxxx`)

## Step 3: Create an Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use these sample values:

**Template Name:** `contact_form`

**In the HTML section, use this template:**
```
Hello Charles,

You have a new message from {{from_name}} ({{from_email}})

Message:
{{message}}

---
Best regards,
{{from_name}}
```

4. Copy your **Template ID** (looks like: `template_xxxxxx`)

## Step 4: Get Your Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (looks like: `abc123xyz...`)

## Step 5: Update Your Code
Open `main.js` and find these lines (around line 120):

```javascript
emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Replace this
emailjs.send("SERVICE_ID_HERE", "TEMPLATE_ID_HERE", { // Replace these
```

Replace with your actual credentials:

```javascript
emailjs.init("YOUR_PUBLIC_KEY_HERE");
emailjs.send("service_xxxxxx", "template_xxxxxx", {
```

**Example:**
```javascript
emailjs.init("abc123xyz456def789...");
emailjs.send("service_abcd1234", "template_xyz9999", {
```

## Step 6: Test It
1. Save `main.js`
2. Go to your portfolio website
3. Scroll to the Contact section
4. Fill out the form and click "Send Message"
5. You should see a success message
6. Check your email - you should receive the message!

## Troubleshooting

**Problem:** "Failed to send message"
- Check that your credentials are correct (no extra spaces)
- Make sure your Gmail service is connected in EmailJS
- Check the browser console (F12) for error messages

**Problem:** Email not received
- Check spam/trash folder
- Verify the template is correctly set up
- Check EmailJS dashboard for failed emails

**Problem:** Can't find credentials
- Go to https://www.emailjs.com/dashboard
- Click on your user icon → Account
- API Keys tab has your Public Key
- Email Services tab has your Service ID

## Need Help?
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Email Template Variables](https://www.emailjs.com/docs/sdk/send/)

---

**Important:** Keep your Public Key safe. It's okay to expose it in front-end code (it's for public use), but never share your Private Key or Service credentials.
