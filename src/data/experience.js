export const experience = [
  {
    id: 1,
    type: 'work',
    role: 'Data Analyst',
    company: 'Headout',
    period: 'May 2024 – Nov 2025',
    location: 'Bangalore',
    bullets: [
      'Built an end-to-end competitor intelligence pipeline using sentence transformer models to map competitor catalogs to Headout\'s; developed a proxy revenue estimation model using review-velocity as a demand signal, uncovering missing product categories that accounted for ~20% of competitor revenue, directly informing product expansion and budget planning.',
      'Developed a Retool app that automated negative review root cause analysis by connecting Looker views directly to Slack, surfacing complete booking details as an instant reply to customer reviews, cutting investigation time by 83% (30 min → 5 min).',
      'Built a weekly Business Intelligence report using Looker tracking key product metrics and growth index scores, enabling managers to identify and act on underperforming segments directly from the report.',
      'Owned the end-to-end analytics data stack, building 20+ dbt models to transform and load data into BigQuery and authoring Looker dashboards that became the primary reporting layer for marketing growth tracking across teams.',
    ],
  },
  {
    id: 2,
    type: 'work',
    role: 'Machine Learning Intern',
    company: 'DXC Technology',
    period: 'Aug 2023 – Dec 2023',
    location: 'Bangalore',
    bullets: [
      'Architected and deployed a Generative AI health insurance chatbot from scratch using Google PaLM and LangChain, enabling users to query complex, jargon-heavy insurance documents in plain English and receive accurate, context-aware responses in real time.',
      'Implemented a retrieval-augmented generation (RAG) pipeline using FAISS for vector similarity search and HuggingFace embeddings for semantic representation of insurance documents, enabling document-grounded responses from unstructured PDFs.',
      'Delivered the end-to-end solution within a 5-member Agile team, owning the NLP and vector search components across the full development lifecycle using PyPDF2, LangChain, and FAISS.',
    ],
  },
  {
    id: 3,
    type: 'work',
    role: 'Summer Intern',
    company: 'Yashoda Hospitals',
    period: 'Jun 2022 – Jul 2022',
    location: 'Hyderabad',
    bullets: [
      'Led a team of interns to build an automated blood report analysis system using Tesseract OCR and OpenCV to extract key diagnostic parameters from scanned reports, achieving ~95% extraction accuracy across 100 real hospital reports.',
      'Designed an automated abnormality flagging pipeline that compared extracted blood parameters against clinical reference ranges, storing results in a database and surfacing flagged anomalies in a doctor-facing app for faster review.',
    ],
  },
  {
    id: 4,
    type: 'education',
    role: 'B.E. (Hons.) Electrical & Electronics Engineering',
    company: 'BITS Pilani, KK Birla Goa Campus',
    period: '2020 – 2024',
    location: 'Goa',
    bullets: [
      'Bachelor of Engineering with Honours in Electrical and Electronics Engineering.',
      'Electives in Machine Learning, Data Structures & Algorithms, and applied mathematics.',
    ],
  },
]
