"use client";

import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const results = {
  A: "🔷 ピピリ守り神タイプ：ピンチ回避のためなら多少の嘘も辞さない！でも謝るのも早い素直な一面も。",
  B: "🌟 ちょい盛りエンタメタイプ：話を盛って自分を魅せたい！みんなを楽しませたいサービス精神の塊。",
  C: "🦙 やさしさ過剰サービスタイプ：相手を傷つけたくない…その気持ちから嘘をついちゃう心優しき人。",
  D: "💥 ノリと勢いで生きてますタイプ：その場の空気とケタ狙いで嘘がボロリ！バレたら冷や汗…でも懲りないタイプ。",
  E: "📦 ちゃっかり利益ゲッタータイプ：損得勘定で動くしっかり者。でもバレた時の逃げ足も早いかも？"
};

const reactions = {
  A: "（でもバレたら即謝罪！憎めないタイプかも？）",
  B: "（いやいや、あれはジョークだよ？ってごまかしがち）",
  C: "（相手のためだったって言い訳しちゃうかも？）"
};

export default function LiarTypeQuiz() {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [result, setResult] = useState<{
    type: string;
    reaction: string;
    notice: string;
  } | null>(null);

  const handleSubmit = () => {
    if (q1 && q2) {
      setResult({
        type: results[q1 as keyof typeof results].split("：")[0],
        reaction: reactions[q2 as keyof typeof reactions],
        notice: results[q1 as keyof typeof results]
      });
    }
  };

  return (
    <div className="px-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">嘘つき診断〜アナタはどのタイプ？〜</h1>

      <div className="mb-6 space-y-2">
        <p>Q1. 嘘をつくとき、アナタはどんな傾向が強い？</p>
        {["A", "B", "C", "D", "E"].map((opt) => (
          <Card key={opt}>
            <CardContent>
              <label>
                <input
                  type="radio"
                  name="q1"
                  value={opt}
                  onChange={(e) => setQ1(e.target.value)}
                  checked={q1 === opt}
                />
                {results[opt as keyof typeof results].split("：")[0]}
              </label>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-6 space-y-2">
        <p>Q2. 嘘がバレたとき、アナタの反応は？</p>
        {["A", "B", "C"].map((opt) => (
          <Card key={opt}>
            <CardContent>
              <label>
                <input
                  type="radio"
                  name="q2"
                  value={opt}
                  onChange={(e) => setQ2(e.target.value)}
                  checked={q2 === opt}
                />
                {reactions[opt as keyof typeof reactions]}
              </label>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button className="w-full" onClick={handleSubmit} disabled={!q1 || !q2}>
        診断する！
      </Button>

      {result && (
        <div className="mt-6">
          <div className="text-sm font-semibold text-muted-foreground mb-1">アナタの嘘つきタイプは…</div>
          <div className="text-lg font-bold">{result.type}：{result.notice}</div>
          <p className="text-sm text-muted-foreground mt-2">{result.reaction}</p>
        </div>
      )}
    </div>
  );
}
