import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Position = { x: number; y: number };
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE: Position[] = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION: Direction = 'RIGHT';
const GAME_SPEED = 150;

export default function Snake() {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [nextDirection, setNextDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('snakeHighScore');
    return saved ? parseInt(saved) : 0;
  });
  const [isPaused, setIsPaused] = useState(true);

  // Generate random food position
  const generateFood = useCallback((currentSnake: Position[]): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, []);

  // Reset game
  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setNextDirection(INITIAL_DIRECTION);
    setFood(generateFood(INITIAL_SNAKE));
    setGameOver(false);
    setScore(0);
    setIsPaused(true);
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameOver) {
        if (e.key === 'Enter' || e.key === ' ') {
          resetGame();
        }
        return;
      }

      if (e.key === ' ') {
        setIsPaused(prev => !prev);
        return;
      }

      const newDirection = (() => {
        switch (e.key) {
          case 'ArrowUp':
          case 'w':
          case 'W':
            return direction !== 'DOWN' ? 'UP' : direction;
          case 'ArrowDown':
          case 's':
          case 'S':
            return direction !== 'UP' ? 'DOWN' : direction;
          case 'ArrowLeft':
          case 'a':
          case 'A':
            return direction !== 'RIGHT' ? 'LEFT' : direction;
          case 'ArrowRight':
          case 'd':
          case 'D':
            return direction !== 'LEFT' ? 'RIGHT' : direction;
          default:
            return null;
        }
      })();

      if (newDirection) {
        e.preventDefault();
        setNextDirection(newDirection);
        if (isPaused) {
          setIsPaused(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameOver, isPaused]);

  // Game loop
  useEffect(() => {
    if (gameOver || isPaused) return;

    const gameLoop = setInterval(() => {
      setDirection(nextDirection);
      
      setSnake(currentSnake => {
        const head = currentSnake[0];
        const newHead: Position = { ...head };

        // Move snake head
        switch (nextDirection) {
          case 'UP':
            newHead.y -= 1;
            break;
          case 'DOWN':
            newHead.y += 1;
            break;
          case 'LEFT':
            newHead.x -= 1;
            break;
          case 'RIGHT':
            newHead.x += 1;
            break;
        }

        // Check wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          return currentSnake;
        }

        // Check self collision
        if (currentSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return currentSnake;
        }

        const newSnake = [newHead, ...currentSnake];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(prev => {
            const newScore = prev + 10;
            if (newScore > highScore) {
              setHighScore(newScore);
              localStorage.setItem('snakeHighScore', newScore.toString());
            }
            return newScore;
          });
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, GAME_SPEED);

    return () => clearInterval(gameLoop);
  }, [gameOver, isPaused, nextDirection, food, generateFood, highScore]);

  // Draw game
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#0D0D0D';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = 'rgba(0, 255, 198, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0);
      ctx.lineTo(i * CELL_SIZE, GRID_SIZE * CELL_SIZE);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(GRID_SIZE * CELL_SIZE, i * CELL_SIZE);
      ctx.stroke();
    }

    // Draw food with neon glow
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#FF2079';
    ctx.fillStyle = '#FF2079';
    ctx.fillRect(
      food.x * CELL_SIZE + 2,
      food.y * CELL_SIZE + 2,
      CELL_SIZE - 4,
      CELL_SIZE - 4
    );

    // Draw snake with neon glow
    ctx.shadowColor = '#00FFC6';
    snake.forEach((segment, index) => {
      const opacity = 1 - (index / snake.length) * 0.5;
      ctx.fillStyle = `rgba(0, 255, 198, ${opacity})`;
      ctx.fillRect(
        segment.x * CELL_SIZE + 2,
        segment.y * CELL_SIZE + 2,
        CELL_SIZE - 4,
        CELL_SIZE - 4
      );
    });

    // Reset shadow
    ctx.shadowBlur = 0;
  }, [snake, food]);

  return (
    <div className="min-h-screen bg-dark-primary flex items-center justify-center p-4">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-1 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-neon-aqua/20"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
            className="border-neon-aqua/30 text-neon-aqua hover:bg-neon-aqua/10 hover:text-neon-aqua"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
          
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-neon-aqua neon-glow">
              SNAKE GAME
            </h1>
            <p className="text-sm text-gray-400 mt-1">Use as setas ou WASD</p>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={resetGame}
            className="border-neon-pink/30 text-neon-pink hover:bg-neon-pink/10 hover:text-neon-pink"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reiniciar
          </Button>
        </div>

        {/* Game Container */}
        <div className="terminal-window p-6">
          {/* Score Display */}
          <div className="flex justify-between mb-4 text-sm sm:text-base">
            <div className="text-neon-aqua">
              <span className="text-gray-400">Score: </span>
              <span className="font-bold neon-glow">{score}</span>
            </div>
            <div className="text-neon-pink">
              <span className="text-gray-400">High Score: </span>
              <span className="font-bold neon-glow">{highScore}</span>
            </div>
          </div>

          {/* Game Canvas */}
          <div className="relative flex justify-center">
            <canvas
              ref={canvasRef}
              width={GRID_SIZE * CELL_SIZE}
              height={GRID_SIZE * CELL_SIZE}
              className="border-2 border-neon-aqua/30 rounded-lg"
              style={{
                boxShadow: '0 0 20px rgba(0, 255, 198, 0.2)',
                maxWidth: '100%',
                height: 'auto',
              }}
            />

            {/* Game Over Overlay */}
            {gameOver && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-lg">
                <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold text-neon-pink neon-glow mb-4">
                    GAME OVER
                  </h2>
                  <p className="text-neon-aqua text-xl mb-6">
                    Score Final: <span className="font-bold">{score}</span>
                  </p>
                  <div className="space-y-2 text-gray-400 text-sm">
                    <p>Pressione ENTER ou ESPAÇO</p>
                    <p>para jogar novamente</p>
                  </div>
                </div>
              </div>
            )}

            {/* Pause Overlay */}
            {isPaused && !gameOver && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-neon-aqua neon-glow mb-4">
                    PAUSADO
                  </h2>
                  <div className="space-y-1 text-gray-400 text-sm">
                    <p>Pressione qualquer seta</p>
                    <p>ou ESPAÇO para continuar</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Controls Info */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-dark-primary/50 p-3 rounded border border-neon-aqua/20">
              <h3 className="text-neon-aqua font-bold mb-2">Controles:</h3>
              <ul className="text-gray-400 space-y-1">
                <li>↑ ↓ ← → - Movimento</li>
                <li>W A S D - Movimento alternativo</li>
                <li>ESPAÇO - Pausar/Continuar</li>
              </ul>
            </div>
            <div className="bg-dark-primary/50 p-3 rounded border border-neon-pink/20">
              <h3 className="text-neon-pink font-bold mb-2">Objetivo:</h3>
              <ul className="text-gray-400 space-y-1">
                <li>Coma a comida rosa</li>
                <li>Cresça a cobra</li>
                <li>Não bata nas paredes</li>
                <li>Não morda a si mesmo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
