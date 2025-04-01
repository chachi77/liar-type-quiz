"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const results = {
  A: "🛡️ ビビり守り神タイプ：ピンチ回避のためなら多少の嘘も辞さない！でも謝るのも早い素直な一面も。",
  B: "🌟 ちょい盛りエンタメタイプ：話を盛って自分を魅せたい！みんなを楽しませたいサービス精神の塊。",
  C: "🐑 やさしさ過剰サービスタイプ：相手を傷つけたくない…その気持ちから嘘をついちゃう心優しき人。",
  D: "🎭 ノリと勢いで生きてますタイプ：その場の空気とウケ狙いで嘘がポロリ！バレたら冷や汗…でも懲りないタイプ。",
  E: "💰 ちゃっかり利益ゲッタータイプ：損得勘定で動くしっかり者。でもバレた時の逃げ足も早いかも？"
};

const reactions = {
  A: "（でもバレたら即謝罪！憎めないタイプかも？）",
  B: "（いやいや、あれはジョークだよ？ってごまかしがち）",
  C: "（“相手のためだった”って言い訳しちゃうかも？）"
};

export default function LiarTypeQuiz() {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [result, setResult] = useState<{ type: string; reaction: string; notice: string } | null>(null);


  const handleSubmit = () => {
    if (q1 && q2) {
      setResult({
        type: results[q1],
        reaction: reactions[q2]
      });
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">🎲 ゆるっと嘘つきタイプ診断 🎲</h1>

      <Card className="mb-4">
        <CardContent className="p-4 space-y-2">
          <p>Q1. 嘘をつくとしたら、それはどんなとき？</p>
          {["A", "B", "C", "D", "E"].map((opt) => (
            <Button
              key={opt}
              variant={q1 === opt ? "default" : "outline"}
              onClick={() => setQ1(opt)}
            >
              {opt}. {results[opt].split("：")[0]}
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent className="p-4 space-y-2">
          <p>Q2. 嘘がバレた時、どうする？</p>
          {["A", "B", "C"].map((opt) => (
            <Button
              key={opt}
              variant={q2 === opt ? "default" : "outline"}
              onClick={() => setQ2(opt)}
            >
              {opt}. {reactions[opt]}
            </Button>
          ))}
        </CardContent>
      </Card>

      <Button className="w-full mb-4" onClick={handleSubmit} disabled={!q1 || !q2}>
        診断する！
      </Button>

      {result && (
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">あなたの嘘つきタイプは…</h2>
            <p>{result.type}</p>
            <p className="text-sm text-muted-foreground mt-2">{result.reaction}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
