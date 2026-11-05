import React, { useMemo } from 'react';

interface PetalConfig {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  type: 'marigold' | 'jasmine' | 'gold_fleck';
}

export const PetalsAnimation: React.FC = () => {
  // Generate random floating petals
  const petals = useMemo<PetalConfig[]>(() => {
    const list: PetalConfig[] = [];
    const count = 18; // Balanced number for smooth visual beauty without CPU overload
    for (let i = 0; i < count; i++) {
      const typeRand = Math.random();
      const type = typeRand < 0.5 ? 'marigold' : typeRand < 0.85 ? 'jasmine' : 'gold_fleck';
      list.push({
        id: i,
        left: Math.floor(Math.random() * 96) + 2, // 2% to 98% width
        size: type === 'jasmine' ? Math.floor(Math.random() * 8) + 10 : Math.floor(Math.random() * 12) + 14,
        duration: Math.floor(Math.random() * 8) + 10, // 10s to 18s float
        delay: Math.floor(Math.random() * 10),
        type,
      });
    }
    return list;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => {
        let petalStyle: React.CSSProperties = {
          left: `${petal.left}%`,
          animationDuration: `${petal.duration}s`,
          animationDelay: `${petal.delay}s`,
          width: `${petal.size}px`,
          height: `${petal.size * 1.3}px`,
        };

        return (
          <div
            key={petal.id}
            className="absolute top-0 animate-petal will-change-transform"
            style={petalStyle}
          >
            {petal.type === 'marigold' && (
              // Warm orange/yellow marigold petal (ചെണ്ടുമല്ലി)
              <div 
                className="w-full h-full rounded-full opacity-80"
                style={{
                  background: 'radial-gradient(ellipse at 30% 30%, #FBBF24 0%, #F59E0B 50%, #D97706 100%)',
                  boxShadow: '0 2px 4px rgba(217, 119, 6, 0.25)',
                  transform: 'rotate(25deg)',
                }}
              />
            )}

            {petal.type === 'jasmine' && (
              // Creamy white Jasmine petal with green tinge (മുല്ലപ്പൂ)
              <div 
                className="w-full h-full rounded-[40%_60%_70%_30%] opacity-90"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 70%, #FEF3C7 100%)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
                  transform: 'rotate(-30deg)',
                }}
              />
            )}

            {petal.type === 'gold_fleck' && (
              // Auspicious shimmering Kasavu gold fleck
              <div 
                className="w-2.5 h-2.5 rounded-full opacity-70"
                style={{
                  background: 'radial-gradient(circle, #FFFBEB 20%, #E5C158 60%, #B8860B 100%)',
                  boxShadow: '0 0 8px #E5C158',
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
