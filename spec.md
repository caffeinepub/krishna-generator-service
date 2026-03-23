# Krishna Generator Service

## Current State
Backend has an Inquiry actor with submitInquiry, getAllInquiries, getInquiryById. Frontend exists but lacks real business content, contact details, WhatsApp integration, and professional design.

## Requested Changes (Diff)

### Add
- Hero section with strong call-to-action for generator rental
- Generator range showcase (10 KVA to 900 KVA)
- WhatsApp direct contact button (6913828054)
- Phone call button (9435405593)
- Business address: A.T Road, Athagaon, Near Railway Gate No. 4
- Owner profile: Mr. Ramdev Pandit
- Working inquiry/rental request form that saves to backend
- Why Choose Us section
- Professional industrial-themed design

### Modify
- Frontend to reflect all real business info

### Remove
- Any placeholder/dummy content

## Implementation Plan
1. Keep existing backend as-is (inquiry submission works)
2. Build full professional frontend with all sections
3. Inquiry form submits to backend canister
4. WhatsApp and phone buttons use real numbers
