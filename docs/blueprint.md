# **App Name**: DPS Admissions Gateway

## Core Features:

- Hero Section & Age/Grade Table Display: Render the top hero section including school branding, admission announcement, introductory text, and the age vs. grade eligibility table, precisely matching the provided screenshot.
- Step 1 Enquiry Form (Client-Side Validation & Redirection): Implement the initial admission enquiry form on the landing page with fields for Full Name, Child's Name, Email, Phone, Campus, and Grade. Handle user input and redirect to the '/step-2' page upon 'Send' button click, without actual data submission at this stage.
- Core Features Section Display: Present the three informational cards (Holistic Education, World Class Faculty, State-of-the-Art Facilities) with their respective icons and text, laid out as shown in the design.
- Call to Action Section Display: Render the 'Join DPS International School' section with background image, overlay, text, and 'Download Prospectus' button as depicted in the screenshot.
- Why DPS Section Display: Showcase the 'Why DPS International School' section, including the school image with creative shapes and the bulleted list of benefits, precisely replicating the visual layout.
- Mission, Value, Vision Section Display: Present the 'Our Mission', 'Our Value', and 'Our Vision' transparent cards with their icons and exact textual content.
- HubSpot Form Submission API Integration: On the '/step-2' page, collect additional form fields (Address, City, Parent Name, Preferred Start Date, Message) and, upon submission, combine data from both Step 1 and Step 2. Send the combined data to HubSpot via their 'submissions/v3' API using a POST request and `fetch()` without a full page reload.

## Style Guidelines:

- Primary color: A deep, professional violet-blue (#38248F) for conveying trust, wisdom, and academic prestige. This color is vibrant enough to stand out against lighter backgrounds.
- Background color: A very subtle, cool light gray-blue (#F5F4F7), visibly of the same hue as the primary but heavily desaturated, providing a clean and inviting canvas for content.
- Accent color: A strong, vibrant blue (#266CE6), approximately 30 degrees counter-clockwise from the primary on the color wheel, designed to draw attention to interactive elements and important information with clear contrast.
- Headline and body font: 'Inter' (sans-serif) for its modern, highly legible, and objective aesthetic, suitable for conveying clear and concise information throughout the application.
- Use clear, conceptual outline or subtly filled icons consistent with educational and institutional themes. Icons should support visual storytelling in feature cards and mission/value/vision sections.
- The layout must be a pixel-perfect rendition of the provided screenshot, including precise spacing, section divisions, and responsive adaptation for both desktop and mobile viewing. Implement using Tailwind CSS.
- Incorporate subtle hover animations on buttons and interactive cards to provide user feedback, alongside smooth transitions for form navigation between Step 1 and Step 2.