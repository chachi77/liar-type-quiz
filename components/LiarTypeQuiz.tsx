"use client";

import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const questions = [
  "ピンチの場面でとっさに言い訳をすることがある",
  "嘘がバレそうになったとき、焦ってさらにごまかすことがある",
  "やさしさから本当のことを言わないことがある",
  "状況によっては白い嘘も必要だと思う"
];

const results: Record<string, { type: string; description: string }> = {
  "0000": { type: "🔷 正直一途タイプ", description: "嘘は絶対NG！誠実さを大切にするタイプ。" },
  "0001": { type: "🌱 状況理解タイプ", description: "白い嘘の必要性も理解する、柔軟な思考の持ち主。" },
  "0010": { type: "🍀 思いやりタイプ", description: "他人への配慮から真実を控える優しさの持ち主。" },
  "0011": { type: "💡 共感的リアリスト", description: "人の気持ちと現実のバランスをとる名人。" },
  "0100": { type: "🔥 動揺回避タイプ", description: "バレそうになるとつい動揺してごまかすことも。" },
  "0101": { type: "🎯 本能派サバイバー", description: "生き抜く力と感覚で動く現場主義タイプ。" },
  "0110": { type: "🧸 優しさの仮面タイプ", description: "優しさゆえに取り繕う、心配性な人。" },
  "0111": { type: "💫 配慮の達人タイプ", description: "人間関係を円滑にする嘘も使いこなす気配りタイプ。" },
  "1000": { type: "🌀 機転タイプ", description: "ピンチに強く、言い訳で乗り切る頭の回転が早い人。" },
  "1001": { type: "🌊 柔軟型リアクター", description: "とっさの機転と柔らかさで波風を立てない。" },
  "1010": { type: "🎭 状況対応タイプ", description: "必要に応じて嘘も使い分けるクレバーな人。" },
  "1011": { type: "🧠 賢者の嘘タイプ", description: "嘘も戦略のひとつと考えるスマート思考。" },
  "1100": { type: "🌪️ 緊急対処タイプ", description: "追い詰められると咄嗟に動ける反射神経タイプ。" },
  "1101": { type: "🔮 戦術家タイプ", description: "状況を冷静に見て最適な一手を打つ計算派。" },
  "1110": { type: "🧞‍♂️ 空気読みタイプ", description: "相手の心を読み、優しさとタイミングで動く。" },
  "1111": { type: "🌀 変幻自在タイプ", description: "どんな場面でも柔軟に対応する嘘のプロ！でも心はピュアかも？" }
};

export default function LiarTypeQuiz() {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [result, setResult] = useState<{
    type: string;
    description: string;
  } | null>(null);

  const handleChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const key = answers.join("");
    if (results[key]) {
      setResult(results[key]);
    }
  };

  return (
    <div className="px-4 max-w-xl mx-auto text-white bg-gray-900 min-h-screen py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">🎭 嘘つきタイプ診断 🎭</h1>

      {questions.map((text, i) => (
        <Card key={i} className="mb-4 bg-gray-800 text-white">
          <CardContent>
            <p className="mb-4 font-semibold">Q{i + 1}. {text}</p>
            <div className="flex gap-4">
              <Button
                className={`w-full px-4 py-2 rounded-xl font-medium transition-colors duration-200 border text-white ${answers[i] === "1" ? "bg-blue-400 shadow-md" : "bg-blue-600 hover:bg-blue-700"}`}
                onClick={() => handleChange(i, "1")}
              >
                YES
              </Button>
              <Button
                className={`w-full px-4 py-2 rounded-xl font-medium transition-colors duration-200 border text-white ${answers[i] === "0" ? "bg-red-400 shadow-md" : "bg-red-600 hover:bg-red-700"}`}
                onClick={() => handleChange(i, "0")}
              >
                NO
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button className="w-full mt-4 bg-green-600 hover:bg-green-700" onClick={handleSubmit} disabled={answers.includes("")}>🧠 診断する！</Button>

      {result && (
        <div className="mt-8 p-6 bg-gray-800 rounded-xl shadow-lg text-center">
          <div className="text-sm font-semibold text-muted-foreground mb-2">
            あなたの嘘つきタイプは…
          </div>
          <div className="text-2xl font-bold mb-2">{result.type}</div>
          <p className="text-base text-muted-foreground">{result.description}</p>
        </div>
      )}
    </div>
  );
}
<Button className={`bg-yes text-white hover:bg-selectedYes`} ...>
  YES
</Button>
<Button className={`bg-no text-white hover:bg-selectedNo`} ...>
  NO
</Button>
