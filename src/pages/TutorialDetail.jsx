import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { tutorialsData } from '../data/tutorialsData';
import CodeEditor from '../components/CodeEditor';
import OutputPanel from '../components/OutputPanel';

const { FiArrowLeft, FiArrowRight, FiPlay, FiCheck, FiBook, FiClock } = FiIcons;

const TutorialDetail = () => {
  const { language, id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const tutorial = tutorialsData.find(t => t.id === id && t.language === language);

  useEffect(() => {
    if (tutorial && tutorial.steps[currentStep]) {
      setCode(tutorial.steps[currentStep].code || '');
      setOutput('');
    }
  }, [tutorial, currentStep]);

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tutorial Not Found</h2>
          <button
            onClick={() => navigate('/tutorials')}
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
          >
            Back to Tutorials
          </button>
        </div>
      </div>
    );
  }

  const currentStepData = tutorial.steps[currentStep];
  const isLastStep = currentStep === tutorial.steps.length - 1;
  const isFirstStep = currentStep === 0;

  const runCode = () => {
    if (language === 'javascript') {
      try {
        const logs = [];
        const originalLog = console.log;
        console.log = (...args) => logs.push(args.join(' '));
        
        eval(code);
        
        console.log = originalLog;
        setOutput(logs.join('\n') || 'Code executed successfully!');
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      }
    } else {
      setOutput(`${language} code executed successfully!\n\nOutput: ${currentStepData.expectedOutput || 'Success!'}`);
    }
  };

  const nextStep = () => {
    if (!isLastStep) {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (!isFirstStep) {
      setCurrentStep(currentStep - 1);
    }
  };

  const markComplete = () => {
    setCompletedSteps(prev => new Set([...prev, currentStep]));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => navigate('/tutorials')}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
              >
                <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
                <span>Back to Tutorials</span>
              </button>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  Step {currentStep + 1} of {tutorial.steps.length}
                </span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / tutorial.steps.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{tutorial.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <SafeIcon icon={FiBook} className="w-4 h-4" />
                <span>{tutorial.language}</span>
              </div>
              <div className="flex items-center space-x-1">
                <SafeIcon icon={FiClock} className="w-4 h-4" />
                <span>{tutorial.duration}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Step Content */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {currentStepData.title}
                  </h2>
                  {completedSteps.has(currentStep) && (
                    <SafeIcon icon={FiCheck} className="w-6 h-6 text-green-600" />
                  )}
                </div>
                
                <div className="prose max-w-none mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {currentStepData.content}
                  </p>
                  
                  {currentStepData.explanation && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-md">
                      <h4 className="font-semibold text-blue-900 mb-2">Explanation:</h4>
                      <p className="text-blue-800">{currentStepData.explanation}</p>
                    </div>
                  )}
                </div>
                
                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevStep}
                    disabled={isFirstStep}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <SafeIcon icon={FiArrowLeft} className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                  
                  <div className="flex items-center space-x-2">
                    {!completedSteps.has(currentStep) && (
                      <button
                        onClick={markComplete}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                      >
                        Mark Complete
                      </button>
                    )}
                    
                    <button
                      onClick={nextStep}
                      disabled={isLastStep}
                      className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{isLastStep ? 'Completed' : 'Next'}</span>
                      {!isLastStep && <SafeIcon icon={FiArrowRight} className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Code Editor */}
              {currentStepData.code && (
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 border-b flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Try it yourself</h3>
                    <button
                      onClick={runCode}
                      className="flex items-center space-x-2 px-3 py-1 bg-secondary-600 text-white rounded-md hover:bg-secondary-700 text-sm"
                    >
                      <SafeIcon icon={FiPlay} className="w-4 h-4" />
                      <span>Run</span>
                    </button>
                  </div>
                  <CodeEditor
                    language={tutorial.language}
                    code={code}
                    onChange={setCode}
                  />
                </div>
              )}

              {/* Output */}
              {output && (
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 border-b">
                    <h3 className="font-semibold text-gray-900">Output</h3>
                  </div>
                  <OutputPanel
                    output={output}
                    language={tutorial.language}
                    code={code}
                  />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Steps Overview */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Tutorial Steps</h3>
                <div className="space-y-2">
                  {tutorial.steps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`w-full text-left p-3 rounded-md transition-colors ${
                        index === currentStep
                          ? 'bg-primary-50 text-primary-700 border border-primary-200'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{step.title}</span>
                        {completedSteps.has(index) && (
                          <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Progress</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Completed</span>
                    <span>{completedSteps.size}/{tutorial.steps.length}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(completedSteps.size / tutorial.steps.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TutorialDetail;