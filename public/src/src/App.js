import React, { useState, useEffect } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('name');
  const [viewMode, setViewMode] = useState('guest');
  const [visitorName, setVisitorName] = useState('');
  const [inputName, setInputName] = useState('');

  const [items, setItems] = useState([
    { id: 1, name: 'iPhone 13 Pro', description: 'Cause God knows i need a new phone, this XS is after my life', image: 'https://images.unsplash.com/photo-1592286927505-1fed6c3d8eaa?w=400&h=300&fit=crop', claimed: false },
    { id: 2, name: 'Sony XM5', description: 'Premium sound, and I love the design of it', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop', claimed: false },
    { id: 3, name: 'Converse sneakers', description: 'I am a sucker for these, can\'t get enough. I am a size 38', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop', claimed: false },
    { id: 4, name: 'Jujutsu Kaisen manga', description: 'Help me get to 10, i have 5 i need 6 more, JJK 0,6,7,8,9,10', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop', claimed: false },
    { id: 5, name: 'Sweetest Oblivion series', description: 'I live to read, ROMANCE 😍😍', image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=300&fit=crop', claimed: false },
    { id: 6, name: 'Anime Jersey', description: 'WHY NOT !!!! You can get this at animeedmerch or all_thingz_qute on instagram', image: 'https://images.unsplash.com/photo-1556821552-5ff63b1fada8?w=400&h=300&fit=crop', claimed: false },
    { id: 7, name: 'Khamrah by Lattafa', description: 'I love itttt', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop', claimed: false },
    { id: 8, name: 'Phlur body mist', description: 'i want caramel skin, dragon fruit, vanilla, and coconut skin scents', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop', claimed: false },
    { id: 9, name: 'Jewelry', description: 'BRACELETS, GOLDDDD 💝😍', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop', claimed: false },
    { id: 10, name: 'Apple watch', description: 'Black, small size', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=300&fit=crop', claimed: false },
    { id: 11, name: 'Gold watch', description: 'Nice gold watch ☺️', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=300&fit=crop', claimed: false },
    { id: 12, name: 'Hermes slippers', description: 'It looks so prettyyy..... this colour', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop', claimed: false },
    { id: 13, name: 'Tote bag', description: 'Black and pretty', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop', claimed: false },
    { id: 14, name: 'THE TOTE BAG', description: 'WHY NOTTTTTTT', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop', claimed: false },
  ]);

  const [formData, setFormData] = useState({ name: '', description: '', image: '' });

  useEffect(() => {
    const saved = localStorage.getItem('wishlistItems');
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(items));
  }, [items]);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      setVisitorName(inputName);
      setInputName('');
      setCurrentPage('landing');
    }
  };

  const toggleItemClaimed = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, claimed: !item.claimed } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const addItem = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.image) return;
    
    const newItem = {
      id: Math.max(...items.map(i => i.id), 0) + 1,
      ...formData,
      claimed: false,
    };
    setItems([...items, newItem]);
    setFormData({ name: '', description: '', image: '' });
  };

  // NAME PAGE
  if (currentPage === 'name') {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f8f3ff 0%, #ffe4f0 100%)', fontFamily: '\'Comic Sans MS\', sans-serif', padding: '2rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '500px' }}>
          <h1 style={{ fontSize: '40px', fontWeight: '900', color: '#534AB7', marginBottom: '0.5rem' }}>Add a name</h1>
          <p style={{ fontSize: '16px', color: '#7F77DD', fontWeight: '600', marginBottom: '2rem' }}>i want to know who's here 😊</p>
          
          <form onSubmit={handleNameSubmit}>
            <input 
              type="text" 
              placeholder="what's your name?"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              required
              style={{ width: '100%', padding: '14px', border: '3px dashed #7F77DD', borderRadius: '12px', fontSize: '14px', fontFamily: '\'Comic Sans MS\', sans-serif', marginBottom: '2rem', textAlign: 'center', color: '#534AB7' }}
            />
            <button type="submit" style={{ padding: '14px 32px', background: 'linear-gradient(135deg, #7F77DD 0%, #534AB7 100%)', border: '4px solid #3C3489', borderRadius: '12px', color: 'white', fontSize: '16px', fontWeight: '900', cursor: 'pointer', fontFamily: '\'Comic Sans MS\', sans-serif', transform: 'rotate(2deg)', width: '100%' }}>
              let's gooooo 💕
            </button>
          </form>
        </div>
      </div>
    );
  }

  // LANDING PAGE
  if (currentPage === 'landing') {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f8f3ff 0%, #ffe4f0 100%)', fontFamily: '\'Comic Sans MS\', sans-serif', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '500px' }}>
          <h1 style={{ fontSize: '40px', fontWeight: '900', color: '#534AB7', marginBottom: '0.5rem' }}>Hi {visitorName}!</h1>
          <p style={{ fontSize: '16px', color: '#7F77DD', fontWeight: '600', marginBottom: '2rem' }}>i made a wishlist just for my birthday 💕</p>

          <div style={{ background: 'white', border: '4px solid #534AB7', borderRadius: '20px', padding: '2rem', marginBottom: '2rem', transform: 'rotate(-1deg)', boxShadow: '0 8px 0px rgba(83, 74, 183, 0.2)' }}>
            <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8', marginBottom: '1.5rem' }}>picking anything from this list would literally make me SO happy. honestly, anything you choose will make my day feel extra special ✨</p>
            
            <div style={{ background: '#EEEDFE', border: '3px solid #AFA9EC', borderRadius: '12px', padding: '1rem', marginBottom: '12px', transform: 'rotate(0.5deg)' }}>
              <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: '#534AB7' }}>🕵️ it's anonymous</p>
              <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#7F77DD', fontWeight: '500' }}>i won't know who got what — pure mystery vibes!</p>
            </div>
            
            <div style={{ background: '#FFE4F0', border: '3px solid #FFB6D9', borderRadius: '12px', padding: '1rem', marginBottom: '12px', transform: 'rotate(-0.5deg)' }}>
              <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: '#C91E63' }}>💝 just claim what you're getting</p>
              <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#E91E63', fontWeight: '500' }}>so others don't pick the same thing</p>
            </div>

            <p style={{ marginTop: '1.5rem', fontSize: '13px', color: '#999', fontStyle: 'italic' }}>
              thank you so much for being here & making this day special 💫
            </p>
          </div>

          <button 
            onClick={() => setCurrentPage('wishlist')}
            style={{ padding: '14px 32px', background: 'linear-gradient(135deg, #7F77DD 0%, #534AB7 100%)', border: '4px solid #3C3489', borderRadius: '12px', color: 'white', fontSize: '16px', fontWeight: '900', cursor: 'pointer', fontFamily: '\'Comic Sans MS\', sans-serif', transform: 'rotate(2deg)', width: '100%' }}
          >
            let's gooo! 🎁
          </button>
        </div>
      </div>
    );
  }

  // WISHLIST PAGE
  return (
    <div style={{ background: 'linear-gradient(135deg, #f8f3ff 0%, #ffe4f0 100%)', minHeight: '100vh', fontFamily: '\'Comic Sans MS\', sans-serif', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <button 
              onClick={() => setCurrentPage('landing')}
              style={{ padding: '8px 16px', background: 'white', border: '3px solid #7F77DD', borderRadius: '12px', color: '#7F77DD', cursor: 'pointer', fontSize: '13px', fontWeight: '700', marginBottom: '12px', fontFamily: '\'Comic Sans MS\', sans-serif' }}
            >
              ← back
            </button>
            <h1 style={{ fontSize: '40px', fontWeight: '900', color: '#534AB7', marginBottom: '8px' }}>My birthday wishlist 😊</h1>
            <p style={{ margin: 0, color: '#7F77DD', fontSize: '14px', fontWeight: '600' }}>Help me celebrate! Pick something and make my day special</p>
          </div>
          <button 
            onClick={() => setViewMode(viewMode === 'guest' ? 'admin' : 'guest')}
            style={{ padding: '10px 16px', background: '#FFB6D9', border: '3px solid #C91E63', borderRadius: '12px', color: '#C91E63', cursor: 'pointer', fontSize: '13px', fontWeight: '700', fontFamily: '\'Comic Sans MS\', sans-serif' }}
          >
            {viewMode === 'admin' ? '👥 guest' : '🔐 admin'}
          </button>
        </div>

        {viewMode === 'admin' && (
          <div style={{ background: 'white', border: '4px solid #7F77DD', borderRadius: '14px', padding: '1.5rem', marginBottom: '2rem', transform: 'rotate(-1deg)', boxShadow: '0 6px 0px rgba(83, 74, 183, 0.1)' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '900', color: '#534AB7', marginBottom: '1rem' }}>Add new item</h2>
            <form onSubmit={addItem}>
              <input 
                type="text" 
                placeholder="item name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                style={{ width: '100%', padding: '10px', border: '3px dashed #7F77DD', borderRadius: '8px', fontSize: '13px', fontFamily: '\'Comic Sans MS\', sans-serif', marginBottom: '12px', color: '#7F77DD' }}
              />
              <textarea 
                placeholder="item description" 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
                style={{ width: '100%', padding: '10px', border: '3px dashed #7F77DD', borderRadius: '8px', fontSize: '13px', fontFamily: '\'Comic Sans MS\', sans-serif', marginBottom: '12px', color: '#7F77DD', minHeight: '60px', resize: 'vertical' }}
              />
              <input 
                type="url" 
                placeholder="upload images" 
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
                required
                style={{ width: '100%', padding: '10px', border: '3px dashed #7F77DD', borderRadius: '8px', fontSize: '13px', fontFamily: '\'Comic Sans MS\', sans-serif', marginBottom: '12px', color: '#7F77DD' }}
              />
              <button type="submit" style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #7F77DD 0%, #534AB7 100%)', border: '4px solid #3C3489', borderRadius: '10px', color: 'white', fontWeight: '900', cursor: 'pointer', fontSize: '13px', fontFamily: '\'Comic Sans MS\', sans-serif' }}>add to list 💝</button>
            </form>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
          {items.map((item) => (
            <div key={item.id} style={{ background: 'white', border: '4px solid #FFB6D9', borderRadius: '14px', overflow: 'hidden', transform: 'rotate(-1deg)', boxShadow: '-6px 6px 0px rgba(255, 182, 217, 0.2)', cursor: 'pointer', position: 'relative' }}>
              <div style={{ position: 'relative', width: '100%', paddingBottom: '75%', background: 'linear-gradient(135deg, #EEEDFE 0%, #FFE4F0 100%)', overflow: 'hidden' }}>
                <img src={item.image} alt={item.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1549887534-7e9a0b637e3a?w=400&h=300&fit=crop'} />
                {viewMode === 'admin' && (
                  <button 
                    onClick={() => deleteItem(item.id)}
                    style={{ position: 'absolute', top: '8px', right: '8px', background: '#FFB6D9', color: '#C91E63', border: '3px solid #C91E63', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer', fontSize: '18px', fontWeight: '900', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
                  >
                    ×
                  </button>
                )}
              </div>
              <div style={{ padding: '1rem' }}>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '14px', fontWeight: '900', color: '#534AB7', lineHeight: '1.3' }}>{item.name}</h3>
                <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#666', lineHeight: '1.5', fontWeight: '500' }}>{item.description}</p>
                {item.claimed ? (
                  <div style={{ width: '100%', padding: '10px', background: 'linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%)', border: '3px solid #4CAF50', borderRadius: '8px', color: '#1B5E20', fontSize: '12px', fontWeight: '900', textAlign: 'center' }}>
                    ✓ i'm getting this
                  </div>
                ) : (
                  <button 
                    onClick={() => toggleItemClaimed(item.id)}
                    style={{ width: '100%', padding: '10px', background: 'linear-gradient(135deg, #FFB6D9 0%, #FF89C8 100%)', border: '3px solid #C91E63', borderRadius: '8px', color: 'white', fontSize: '12px', fontWeight: '900', cursor: 'pointer', fontFamily: '\'Comic Sans MS\', sans-serif' }}
                  >
                    💝 i'm getting this
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', padding: '2rem 1.5rem', background: 'white', border: '4px dashed #FFB6D9', borderRadius: '14px', transform: 'rotate(-1deg)', position: 'relative', boxShadow: '0 6px 0px rgba(255, 182, 217, 0.15)' }}>
          <p style={{ margin: 0, color: '#534AB7', fontSize: '14px', fontWeight: '900' }}>{items.length} things i want • {items.filter(i => i.claimed).length} claimed</p>
        </div>
      </div>
    </div>
  );
}
