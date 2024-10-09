import React, { useState } from 'react';

const Calculators = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(0);
  const [calorie, setCalorie] = useState(0);
  const [bmiMessage, setBmiMessage] = useState('');
  const [bmiColor, setBmiColor] = useState('');
  const [protein, setProtein] = useState(0);
  const [carbohydrate, setCarbohydrate] = useState(0);
  const [fat, setFat] = useState(0);
  const [showMacronutrients, setShowMacronutrients] = useState(false);

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setBmiMessage(
        'Zayıf: Vücut kitle endeksiniz düşük. Bu durum, zayıf kaslara ve düşük vücut yağına işaret edebilir. Beslenme ve egzersiz alışkanlıklarınızı gözden geçirin.'
      );
      setBmiColor('text-red-500');
    } else if (bmiValue < 25) {
      setBmiMessage(
        'Normal: Vücut kitle endeksiniz normal. Bu durum, sağlıklı bir vücut yapısına ve uygun bir beslenme düzenine işaret edebilir. Devam edin!'
      );
      setBmiColor('text-green-500');
    } else if (bmiValue < 30) {
      setBmiMessage(
        'Kilolu: Vücut kitle endeksiniz yüksek. Bu durum, fazla kiloya ve obezite riskine işaret edebilir. Beslenme ve egzersiz alışkanlıklarınızı gözden geçirin.'
      );
      setBmiColor('text-orange-500');
    } else {
      setBmiMessage(
        'Obez: Vücut kitle endeksiniz çok yüksek. Bu durum, ciddi sağlık sorunlarına işaret edebilir. Bir doktora danışın ve beslenme ve egzersiz alışkanlıklarınızı gözden geçirin.'
      );
      setBmiColor('text-red-500');
    }
  };

  const calculateCalorie = () => {
    const basalMetabolicRate = 66 + 6.2 * weight + 12.7 * height - 6.8 * 30;
    const dailyActivityLevel = 1.55; // moderate exercise/sports 3-5 days/week
    const dailyCaloricNeeds = basalMetabolicRate * dailyActivityLevel;
    setCalorie(dailyCaloricNeeds.toFixed(2));
    calculateMacronutrients(dailyCaloricNeeds);
    setShowMacronutrients(true);
  };

  const calculateMacronutrients = (dailyCaloricNeeds) => {
    const proteinCalories = dailyCaloricNeeds * 0.3;
    const carbohydrateCalories = dailyCaloricNeeds * 0.4;
    const fatCalories = dailyCaloricNeeds * 0.3;

    setProtein((proteinCalories / 4).toFixed(2));
    setCarbohydrate((carbohydrateCalories / 4).toFixed(2));
    setFat((fatCalories / 9).toFixed(2));
  };

  return (
    <>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold mb-4">Calculators</h1>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>
            <div className="flex flex-col">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight (kg)"
                className="p-2 mb-4 border border-gray-400 rounded-md"
              />
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Height (cm)"
                className="p-2 mb-4 border border-gray-400 rounded-md"
              />
              <button
                onClick={calculateBmi}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Calculate BMI
              </button>
              <p className="text-lg font-bold mt-4">BMI: {bmi}</p>
              <p className={`text-lg font-bold mt-4 ${bmiColor}`}>
                {bmiMessage}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Calorie Calculator</h2>
            <div className="flex flex-col">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight (kg)"
                className="p-2 mb-4 border border-gray-400 rounded-md"
              />
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Height (cm)"
                className="p-2 mb-4 border border-gray-400 rounded-md"
              />
              <button
                onClick={calculateCalorie}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Calculate Calorie
              </button>
              <p className="text-lg font-bold mt-4">Calorie: {calorie}</p>
              {showMacronutrients && (
                <div>
                  <h3 className="text-lg font-bold mt-4">
                    Macronutrient Distribution
                  </h3>
                  <p className="text-lg font-bold mt-4">Protein: {protein}g</p>
                  <p className="text-lg font-bold mt-4">
                    Carbohydrate: {carbohydrate}g
                  </p>
                  <p className="text-lg font-bold mt-4">Fat: {fat}g</p>
                  <ul className="text-lg font-bold mt-4">
                    Vitamins ( Consult your doctor)
                    <li className="mt-1 list-disc ml-5">D : 600-800IU</li>
                    <li className="mt-1 list-disc ml-5">C : 75-90 mg</li>
                    <li className="mt-1 list-disc ml-5">
                      Iron : 8mg(For men) / 18mg(For women){' '}
                    </li>
                    <li className="mt-1 list-disc ml-5">
                      Calsium : 1000-1200 mg
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full bg-gray-800 text-white p-3 text-center fixed bottom-0">
        <p>
          © 2024 BOE Fit Academy. All rights reserved.{' '}
          <a
            href="https://github.com/emirberkoncu"
            className="text-blue-500 hover:text-blue-700"
          >
            Github
          </a>
        </p>
      </footer>
    </>
  );
};

export default Calculators;
