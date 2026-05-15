export const projects = [
  {
    id: 1,
    title: 'Competitor Intelligence Pipeline',
    description:
      'End-to-end revenue estimation system using BAAI sentence transformers to semantically map competitor products. IQR-based spike detection cleans manipulated review data; a proxy revenue model reverse-engineered from internal signals surfaced missing product categories accounting for ~20% of competitor revenue.',
    techStack: ['Python', 'BigQuery', 'dbt', 'Looker', 'Sentence Transformers', 'LLM'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: 2,
    title: 'LLM-Powered SQL Agent',
    description:
      'Natural language to SQL agent with a self-healing execution loop that catches runtime errors, passes the trace back to the LLM with a structured correction prompt, and retries autonomously. Reduces query failure rate by 70% with full observability via MLflow.',
    techStack: ['LangChain', 'GPT-2', 'MLflow', 'Docker', 'Streamlit'],
    githubUrl: 'https://github.com/ashrith1903',
    liveUrl: null,
  },
  {
    id: 3,
    title: 'Customer Churn Prediction',
    description:
      'End-to-end churn pipeline with XGBoost and LightGBM, Optuna hyperparameter tuning, and SHAP explainability. Includes an A/B testing framework using power analysis, z-tests, and Mann-Whitney U tests. Deployed as a FastAPI + Docker REST API.',
    techStack: ['XGBoost', 'LightGBM', 'SHAP', 'Optuna', 'SciPy', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/ashrith1903',
    liveUrl: null,
  },
  {
    id: 4,
    title: 'TCN Anomaly Detection',
    description:
      'Temporal Convolutional Network for multivariate time-series anomaly detection, outperforming LSTM baseline by 14% F1 on NASA SMAP benchmark. Mixed-precision training, drift monitoring module, and real-time FastAPI scoring API.',
    techStack: ['TensorFlow', 'Keras Tuner', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/ashrith1903',
    liveUrl: null,
  },
  {
    id: 5,
    title: 'SAM Skin Lesion Segmentation',
    description:
      "Fine-tuned Meta's Segment Anything Model with LoRA adapters on ISIC 2018, achieving 88.3% Dice score and outperforming U-Net by 6.2%. Includes Grad-CAM visualisation layer and test-time augmentation.",
    techStack: ['PyTorch', 'SAM', 'LoRA', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/ashrith1903',
    liveUrl: null,
  },
  {
    id: 6,
    title: 'RAG Health Insurance Chatbot',
    description:
      'Document-grounded chatbot across multiple insurance brochures with source attribution via metadata tagging per chunk. Retrieval-Augmented Generation backed by FAISS vector store and Google PaLM as the generative layer.',
    techStack: ['LangChain', 'FAISS', 'HuggingFace', 'Google PaLM', 'PyPDF2'],
    githubUrl: 'https://github.com/ashrith1903',
    liveUrl: null,
  },
  {
    id: 7,
    title: 'Blood Report OCR Pipeline',
    description:
      'Automated diagnostic parameter extraction from scanned blood reports with abnormality flagging, achieving 95% extraction accuracy across 100 real hospital reports. Diagnostic centre classifier handles layout-agnostic extraction.',
    techStack: ['Tesseract OCR', 'OpenCV', 'Python'],
    githubUrl: 'https://github.com/ashrith1903',
    liveUrl: null,
  },
]
