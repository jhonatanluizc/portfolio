export default function Kode({ onPress }: { onPress: (key: string) => void; }) {

    const Button = ({ children, onClick, className, rounded = 'lg' }: { children: React.ReactNode; onClick: () => void; className?: string; rounded?: string; isArrow?: boolean; }) => (
        <button
            onClick={onClick}
            className={`w-10 h-10 bg-dark-secondary/80 hover:bg-dark-primary border border-neon-aqua/30 flex items-center justify-center text-gray-100 hover:text-neon-aqua font-medium text-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-aqua/20 shadow-sm rounded-${rounded} font-fira ${className}`}
            style={{ fontFamily: 'Montserrat, Noto Sans JP, Arial, sans-serif' }}
        >
            {children}
        </button>
    );

    return (
        <div className="flex flex-col items-center py-8">
            <div className="flex gap-3 items-center">
                <Button onClick={() => onPress('ArrowUp')} >↑</Button>
                <Button onClick={() => onPress('ArrowUp')} >↑</Button>
                <Button onClick={() => onPress('ArrowDown')} >↓</Button>
                <Button onClick={() => onPress('ArrowDown')} >↓</Button>
                <Button onClick={() => onPress('ArrowLeft')} >←</Button>
                <Button onClick={() => onPress('ArrowRight')} >→</Button>
                <Button onClick={() => onPress('ArrowLeft')} >←</Button>
                <Button onClick={() => onPress('ArrowRight')}>→</Button>
                <Button onClick={() => onPress('KeyB')} className='bg-dark-secondary/80 hover:bg-dark-primary border-neon-pink/50 text-neon-pink hover:text-neon-pink hover:shadow-neon-pink/20' rounded="full">B</Button>
                <Button onClick={() => onPress('KeyA')} className='bg-dark-secondary/80 hover:bg-dark-primary border-neon-blue/50 text-neon-blue hover:text-neon-blue hover:shadow-neon-blue/20' rounded="full">A</Button>
            </div>

        </div>
    );
}