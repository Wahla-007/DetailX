# EmailJS Setup Guide for DetailX

## Steps to Enable Email Notifications

### 1. Sign Up for EmailJS
- Go to https://www.emailjs.com/
- Click "Sign Up" and create a free account
- Verify your email

### 2. Set Up Email Service
- In your EmailJS dashboard, go to **Email Services**
- Click **Add Service**
- Select your email provider (Gmail, Outlook, etc.)
- Follow the instructions to connect your email account
- Copy your **Service ID** (looks like: `service_xxxxx`)

### 3. Create Email Template
- In your EmailJS dashboard, go to **Email Templates**
- Click **Create New Template**
- Set up your template with these variables:
  ```
  Subject: New Booking Request from {{from_name}}
  
  Body:
  Name: {{from_name}}
  Email: {{from_email}}
  Phone: {{phone}}
  Service: {{service}}
  Custom Service: {{custom_service}}
  Address: {{address}}
  Notes: {{notes}}
  
  Message:
  {{message}}
  ```
- Copy your **Template ID** (looks like: `template_xxxxx`)

### 4. Get Your Public Key
- In your EmailJS dashboard, go to **Account** → **API Keys**
- Copy your **Public Key**

### 5. Update the Website Code
Open `script.js` and replace:
- `YOUR_PUBLIC_KEY` with your EmailJS Public Key
- `SERVICE_ID` with your Service ID
- `TEMPLATE_ID` with your Template ID
- `info@detailx.com` with your preferred email address where you want to receive bookings

Example:
```javascript
emailjs.init('pk_test_xxxxxxxxxxxxx'); // Your Public Key

emailjs.send(
    'service_xxxxx',      // Your Service ID
    'template_xxxxx',     // Your Template ID
    {
        to_email: 'your-email@example.com',  // Your email
        // ... rest of the template variables
    }
);
```

### 6. Test the Form
- Go to your website
- Fill out the contact form
- Submit it
- Check your email to confirm the booking request was received

## Troubleshooting
- If emails aren't being sent, check the browser console (F12) for errors
- Make sure your email service is properly connected in EmailJS
- Verify that you've copied the correct Service ID and Template ID
- Check your spam/junk folder

## Alternative: Using a Backend Service
If you prefer to use a backend service instead:
1. Set up a Node.js/PHP backend
2. Use a service like SendGrid, AWS SES, or Mailgun
3. Create an API endpoint that handles form submissions
4. Update the JavaScript to POST to your endpoint

---
**Note:** EmailJS is completely free for up to 200 emails per month on the free tier.
