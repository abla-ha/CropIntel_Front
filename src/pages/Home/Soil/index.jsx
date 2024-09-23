import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { Droplet, Thermometer, Leaf, Wind, Download, Sun, Moon } from 'lucide-react';
import './index.css'; // Import the new CSS file


// Mock data
const soilData = [
    { month: 'Jan', moisture: 30, pH: 6.5, nitrogen: 20, phosphorus: 15, potassium: 150, organicMatter: 3.5, cec: 15, ec: 1.2, temperature: 10, compaction: 1.3, erosionRisk: 'Low' },
    { month: 'Feb', moisture: 28, pH: 6.7, nitrogen: 22, phosphorus: 16, potassium: 155, organicMatter: 3.6, cec: 16, ec: 1.3, temperature: 12, compaction: 1.2, erosionRisk: 'Low' },
    { month: 'Mar', moisture: 32, pH: 6.6, nitrogen: 21, phosphorus: 17, potassium: 160, organicMatter: 3.7, cec: 15, ec: 1.2, temperature: 15, compaction: 1.4, erosionRisk: 'Medium' },
    { month: 'Apr', moisture: 35, pH: 6.8, nitrogen: 23, phosphorus: 18, potassium: 165, organicMatter: 3.8, cec: 17, ec: 1.4, temperature: 18, compaction: 1.3, erosionRisk: 'Low' },
    { month: 'May', moisture: 40, pH: 7.0, nitrogen: 25, phosphorus: 19, potassium: 170, organicMatter: 3.9, cec: 18, ec: 1.5, temperature: 22, compaction: 1.2, erosionRisk: 'Low' },
    { month: 'Jun', moisture: 38, pH: 6.9, nitrogen: 24, phosphorus: 20, potassium: 175, organicMatter: 4.0, cec: 17, ec: 1.3, temperature: 25, compaction: 1.5, erosionRisk: 'Medium' }
  ];
  
  const soilComposition = [
    { name: 'Sand', value: 40 },
    { name: 'Silt', value: 40 },
    { name: 'Clay', value: 20 }
  ];
  
  const COLORS = ['#004d00', '#008000', '#00b300', '#00e600'];

const MetricCard = ({ title, value, unit, icon: Icon, description }) => (
  <div className="metric-card">
    <div className="metric-card-header">
      <h3>{title}</h3>
      {Icon && <Icon className="icon" />}
    </div>
    <p className="metric-value">{value}{unit}</p>
    <p className="metric-description">{description}</p>
  </div>
);


const SoilChart = ({ data, dataKey }) => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={dataKey} stroke="#008000" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
  
  const SoilCompositionChart = ({ data }) => (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#008000"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );


const SoilHealthRadar = ({ data }) => {
    const latestData = data[data.length - 1];
    const radarData = [
      { subject: 'pH', A: latestData.pH, fullMark: 14 },
      { subject: 'Moisture', A: latestData.moisture, fullMark: 100 },
      { subject: 'Nitrogen', A: latestData.nitrogen, fullMark: 50 },
      { subject: 'Phosphorus', A: latestData.phosphorus, fullMark: 50 },
      { subject: 'Potassium', A: latestData.potassium, fullMark: 300 },
      { subject: 'Organic Matter', A: latestData.organicMatter, fullMark: 10 }
    ];
  
    return (
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Soil Health" dataKey="A" stroke="#008000" fill="#008000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  };

  
const Soil = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedCrop, setSelectedCrop] = useState("corn");
  const [timeRange, setTimeRange] = useState("monthly");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const exportData = (format) => {
    console.log(`Exporting data in ${format} format`);
  };

  return (
    <div className={`soil-dashboard ${darkMode ? 'dark-mode' : ''}`}>
      <div className="dashboard-header">
        <h1>Soil Monitoring</h1>
        <div className="dashboard-controls">
          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="select-input"
          >
            <option value="corn">Corn</option>
            <option value="wheat">Wheat</option>
            <option value="soybean">Soybean</option>
          </select>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="select-input"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <button
            onClick={() => exportData('csv')}
            className="export-button"
          >
            <Download className="icon" /> Export
          </button>
          <div className="dark-mode-toggle">
            <Sun className="icon" />
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="toggle"
            />
            <Moon className="icon" />
          </div>
        </div>
      </div>

      <div className="tab-container">
        {['overview', 'soil-health', 'nutrients', 'environmental'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="tab-content"
        >
          {activeTab === 'overview' && (
            <div className="metric-grid">
              <MetricCard 
                title="Soil Moisture" 
                value={`${soilData[0].moisture}%`} 
                unit="" 
                icon={Droplet} 
                description="Optimal range: 20-30%. Current level indicates good water retention."
              />
              <MetricCard 
                title="Soil pH" 
                value={soilData[0].pH} 
                unit="" 
                icon={Thermometer} 
                description="Ideal range: 6.0-7.0. Current pH is suitable for most crops."
              />
              <MetricCard 
                title="Nitrogen Level" 
                value={`${soilData[0].nitrogen}`} 
                unit=" mg/kg" 
                icon={Leaf} 
                description="Essential for leaf growth. Current level is within the recommended range."
              />
              <MetricCard 
                title="Phosphorus Level" 
                value={`${soilData[0].phosphorus}`} 
                unit=" mg/kg" 
                icon={Leaf} 
                description="Important for root development. Level is adequate for crop needs."
              />
              <MetricCard 
                title="Potassium Level" 
                value={`${soilData[0].potassium}`} 
                unit=" mg/kg" 
                icon={Leaf} 
                description="Crucial for overall plant health. Current level is optimal."
              />
              <MetricCard 
                title="Organic Matter" 
                value={`${soilData[0].organicMatter}`} 
                unit="%" 
                icon={Leaf} 
                description="Ideal range: 3-5%. Good for soil structure and nutrient retention."
              />
            </div>
          )}
          {activeTab === 'soil-health' && (
            <div className="chart-container">
              <h2>Soil Health Over Time</h2>
              <div className="chart-grid">
                <div className="chart">
                  <SoilChart data={soilData} dataKey="moisture" />
                </div>
                <div className="chart">
                  <SoilChart data={soilData} dataKey="pH" />
                </div>
              </div>
              <div className="chart full-width">
                <SoilHealthRadar data={soilData} />
              </div>
            </div>
          )}
          {activeTab === 'nutrients' && (
            <div className="chart-container">
              <h2>Soil Nutrient Composition</h2>
              <div className="chart full-width">
                <SoilCompositionChart data={soilComposition} />
              </div>
            </div>
          )}
          {activeTab === 'environmental' && (
            <div className="chart-container">
              <h2>Environmental Conditions</h2>
              <div className="chart-grid">
                <div className="chart">
                  <SoilChart data={soilData} dataKey="temperature" />
                </div>
                <div className="chart">
                  <SoilChart data={soilData} dataKey="compaction" />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Soil;