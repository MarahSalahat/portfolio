export interface Project {
  title: string;
  description: string;
  features?: string[];
  tags: string[];
  github?: string;
  netlify?: string;
  video?: string;
  image?: string;
}
export const projects: Project[] = [
  {
    title: "Discover Palestine",
    description:
      "A React web application showcasing Palestinian history, culture, and art through interactive features and multimedia.",
    features: [
      "🕰️ Historical Time Map with dynamic timeline",
      "📸 Cultural Gallery with vibrant images",
      "🎥 Art and Music Videos",
      "📚 Literature Highlights",
      "🎨 Diverse Styling Techniques: parallax, hover animations, overlays"
    ],
    tags: ["React", "Cultural", "Frontend"],
    netlify: "https://discover-palestine.netlify.app/"
  },
  {
    title: "TraffiSense",
    description:
      "A traffic monitoring app using weather data and AI, built with frontend tools and Node.js.",
    features: [
      "🌍 Weather-based congestion prediction",
      "📊 Tableau congestion chart",
      "📉 Insights and analysis page",
      "💬 Community forum"
    ],
    tags: ["Node.js", "AI", "Dashboard","Frontend"],
    netlify: "https://smart-city-traffic-app.web.app/index.html"
  },
  {
    title: "ECG Monitoring System",
    description:
      "A wearable ECG system using Flutter, Flask, and AI to detect abnormalities in real time.",
    features: [
      "📱 Real-Time ECG data to mobile app",
      "🏥 Hospital monitoring and alerts",
      "🤖 AI analysis of ECG signals",
      "💡 Ecosystem: device + app + Flask backend"
    ],
    tags: ["Flutter", "Healthcare", "AI"],
    video: "assets/videos/ECG_demo.MOV"
  },
  {
    title: "Weather Time Series Forecasting",
    description:
      "Time series model predicting weather data using regression and deployed with a Flutter app.",
    features: [
      "📊 EDA and preprocessing",
      "🔧 Linear Regression & SGD model",
      "📱 Flutter app with 5-day forecast",
      "🌐 Flask backend for predictions"
    ],
    tags: ["ML", "Time Series", "Flutter"],
    video: "assets/videos/Weather_demo.MP4"
  },
  
];
