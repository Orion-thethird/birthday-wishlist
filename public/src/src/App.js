import React, { useState, useEffect } from 'react';
 
export default function BirthdayWishlist() {
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
    { id: 10, name: 'Apple watch', description: 'Black, small size', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop', claimed: false },
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
 
  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Comic Sans MS', 'Trebuchet MS', sans-serif;
      background: linear-gradient(135deg, #f8f3ff 0%, #ffe4f0 100%);
      min-height: 100vh;
    }
    
    @keyframes float {
      0%, 100% { transform: rotate(0deg) translateY(0px); }
      50% { transform: rotate(2deg) translateY(-8px); }
    }
    
    .floating { animation: float 3s ease-in-out infinite; }
    .floating-delay { animation: float 3s ease-in-out infinite 0.5s; }
    
    .container {
      max-width: 500px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }
    
    .container-wide {
      max-width: 1000px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }
    
    .page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    h1 {
      font-size: 40px;
      font-weight: 900;
      color: #534AB7;
      margin-bottom: 0.5rem;
      letter-spacing: -1px;
    }
    
    h2 {
      font-size: 18px;
      font-weight: 900;
      color: #534AB7;
      margin-bottom: 1rem;
    }
    
    .subtitle {
      font-size: 16px;
      color: #7F77DD;
      font-weight: 600;
      margin-bottom: 2rem;
    }
    
    .input-box {
      background: white;
      border: 3px dashed #7F77DD;
      border-radius: 12px;
      padding: 14px;
      font-size: 14px;
      font-family: 'Comic Sans MS', 'Trebuchet MS', sans-serif;
      color: #534AB7;
      margin-bottom: 2rem;
      text-align: center;
    }
    
    .input-box::placeholder {
      color: #AFA9EC;
    }
    
    .btn {
      font-family: 'Comic Sans MS', 'Trebuchet MS', sans-serif;
      border: none;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
      border-radius: 12px;
    }
    
    .btn-primary {
      padding: 14px 32px;
      background: linear-gradient(135deg, #7F77DD 0%, #534AB7 100%);
      border: 4px solid #3C3489;
      color: white;
      font-size: 16px;
      transform: rotate(2deg);
      box-shadow: 6px 6px 0px rgba(83, 74, 183, 0.3);
    }
    
    .btn-primary:hover {
      transform: rotate(2deg) scale(1.05);
    }
    
    .message-box {
      background: white;
      border: 4px solid #534AB7;
      border-radius: 20px;
      padding: 2rem;
      margin-bottom: 2rem;
      position: relative;
      transform: rotate(-1deg);
      box-shadow: 0 8px 0px rgba(83, 74, 183, 0.2);
    }
    
    .message-box p {
      font-size: 15px;
      color: #333;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }
    
    .info-box {
      background: #EEEDFE;
      border: 3px solid #AFA9EC;
      border-radius: 12px;
      padding: 1rem;
      margin-bottom: 12px;
      text-align: left;
      transform: rotate(0.5deg);
    }
    
    .info-box.pink {
      background: #FFE4F0;
      border: 3px solid #FFB6D9;
      transform: rotate(-0.5deg);
    }
    
    .info-box-title {
      margin: 0;
      font-size: 13px;
      font-weight: 600;
      color: #534AB7;
    }
    
    .info-box.pink .info-box-title {
      color: #C91E63;
    }
    
    .info-box-text {
      margin: 4px 0 0 0;
      font-size: 12px;
      color: #7F77DD;
      font-weight: 500;
    }
    
    .info-box.pink .info-box-text {
      color: #E91E63;
    }
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 3rem;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .header-title h1 {
      margin-bottom: 8px;
    }
    
    .header-title p {
      margin: 0;
      color: #7F77DD;
      font-size: 14px;
      font-weight: 600;
    }
    
    .btn-admin {
      padding: 10px 16px;
      background: #FFB6D9;
      border: 3px solid #C91E63;
      color: #C91E63;
      font-size: 13px;
    }
    
    .btn-back {
      padding: 8px 16px;
      background: white;
      border: 3px solid #7F77DD;
      color: #7F77DD;
      font-size: 13px;
      margin-bottom: 12px;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      margin-bottom: 3rem;
    }
    
    .item-card {
      background: white;
      border: 4px solid #FFB6D9;
      border-radius: 14px;
      overflow: hidden;
      transform: rotate(-1deg);
      transition: all 0.3s;
      cursor: pointer;
      box-shadow: -6px 6px 0px rgba(255, 182, 217, 0.2);
      position: relative;
    }
    
    .item-image {
      position: relative;
      width: 100%;
      padding-bottom: 75%;
      background: linear-gradient(135deg, #EEEDFE 0%, #FFE4F0 100%);
      overflow: hidden;
    }
    
    .item-image img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .delete-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      background: #FFB6D9;
      color: #C91E63;
      border: 3px solid #C91E63;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 18px;
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.2s;
      z-index: 10;
    }
    
    .item-card:hover .delete-btn {
      opacity: 1;
    }
    
    .item-content {
      padding: 1rem;
    }
    
    .item-content h3 {
      margin: 0 0 6px 0;
      font-size: 14px;
      font-weight: 900;
      color: #534AB7;
      line-height: 1.3;
    }
    
    .item-content p {
      margin: 0 0 12px 0;
      font-size: 12px;
      color: #666;
      line-height: 1.5;
      font-weight: 500;
    }
    
    .item-btn {
      width: 100%;
      padding: 10px;
      background: linear-gradient(135deg, #FFB6D9 0%, #FF89C8 100%);
      border: 3px solid #C91E63;
      border-radius: 8px;
      color: white;
      font-size: 12px;
      font-weight: 900;
      cursor: pointer;
      font-family: 'Comic Sans MS', 'Trebuchet MS', sans-serif;
    }
    
    .claimed-btn {
      width: 100%;
      padding: 10px;
      background: linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%);
      border: 3px solid #4CAF50;
      border-radius: 8px;
      color: #1B5E20;
      font-size: 12px;
      font-weight: 900;
      text-align: center;
    }
    
    .stats {
      text-align: center;
      padding: 2rem 1.5rem;
      background: white;
      border: 4px dashed #FFB6D9;
      border-radius: 14px;
      transform: rotate(-1deg);
      position: relative;
      box-shadow: 0 6px 0px rgba(255, 182, 217, 0.15);
    }
    
    .stats p {
      margin: 0;
      color: #534AB7;
      font-size: 14px;
      font-weight: 900;
    }
    
    .form-section {
      background: white;
      border: 4px solid #7F77DD;
      border-radius: 14px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      position: relative;
      transform: rotate(-1deg);
      box-shadow: 0 6px 0px rgba(83, 74, 183, 0.1);
    }
    
    .form-section input,
    .form-section textarea {
      width: 100%;
      padding: 10px;
      border: 3px dashed #7F77DD;
      border-radius: 8px;
      font-size: 13px;
      font-family: 'Comic Sans MS', 'Trebuchet MS', sans-serif;
      margin-bottom: 12px;
      color: #7F77DD;
    }
    
    .form-section input::placeholder,
    .form-section textarea::placeholder {
      color: #AFA9EC;
    }
    
    .form-section textarea {
      resize: vertical;
      min-height: 60px;
    }
    
    .form-section button {
      width: 100%;
      padding: 12px;
      background: linear-gradient(135deg, #7F77DD 0%, #534AB7 100%);
      border: 4px solid #3C3489;
      border-radius: 10px;
      color: white;
      font-weight: 900;
      cursor: pointer;
      font-size: 13px;
      font-family: 'Comic Sans MS', 'Trebuchet MS', sans-serif;
    }
  `;
 
  // NAME PAGE
  if (currentPage === 'name') {
    return (
      <div className="page" style={{ background: 'linear-gradient(135deg, #f8f3ff 0%, #ffe4f0 100%)' }}>
        <style>{styles}</style>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Add a name</h1>
          <p className="subtitle">i want to know who's here 😊</p>
          
          <form onSubmit={handleNameSubmit}>
            <input 
              type="text" 
              className="input-box"
              placeholder="what's your name?"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">
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
      <div className="page" style={{ background: 'linear-gradient(135deg, #f8f3ff 0%, #ffe4f0 100%)' }}>
        <style>{styles}</style>
        <div className="container">
          <h1>Hi {visitorName}!</h1>
          <p className="subtitle">i made a wishlist just for my birthday 💕</p>
 
          <div className="message-box">
            <p>picking anything from this list would literally make me SO happy. honestly, anything you choose will make my day feel extra special ✨</p>
            
            <div className="info-box">
              <p className="info-box-title">🕵️ it's anonymous</p>
              <p className="info-box-text">i won't know who got what — pure mystery vibes!</p>
            </div>
            
            <div className="info-box pink">
              <p className="info-box-title">💝 just claim what you're getting</p>
              <p className="info-box-text">so others don't pick the same thing</p>
            </div>
 
            <p style={{ marginTop: '1.5rem', fontSize: '13px', color: '#999', fontStyle: 'italic' }}>
              thank you so much for being here & making this day special 💫
            </p>
          </div>
 
          <button 
            className="btn btn-primary"
            onClick={() => setCurrentPage('wishlist')}
            style={{ width: '100%' }}
          >
            let's gooo! 🎁
          </button>
        </div>
      </div>
    );
  }
 
  // WISHLIST PAGE
  return (
    <div style={{ background: 'linear-gradient(135deg, #f8f3ff 0%, #ffe4f0 100%)', minHeight: '100vh' }}>
      <style>{styles}</style>
      
      <div style={{ position: 'fixed', top: '2%', left: '5%', fontSize: '32px', opacity: 0.3, pointerEvents: 'none' }} className="floating">🎀</div>
      <div style={{ position: 'fixed', top: '15%', right: '3%', fontSize: '28px', opacity: 0.3, pointerEvents: 'none' }} className="floating floating-delay">💕</div>
 
      <div className="container-wide">
        <div className="header">
          <div>
            <button 
              className="btn btn-back"
              onClick={() => setCurrentPage('landing')}
            >
              ← back
            </button>
            <div className="header-title">
              <h1>My birthday wishlist 😊</h1>
              <p>Help me celebrate! Pick something and make my day special</p>
            </div>
          </div>
          <button 
            className="btn btn-admin"
            onClick={() => setViewMode(viewMode === 'guest' ? 'admin' : 'guest')}
          >
            {viewMode === 'admin' ? '👥 guest' : '🔐 admin'}
          </button>
        </div>
 
        {viewMode === 'admin' && (
          <div className="form-section">
            <h2>Add new item</h2>
            <form onSubmit={addItem}>
              <input 
                type="text" 
                placeholder="item name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <textarea 
                placeholder="item description" 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
              />
              <input 
                type="url" 
                placeholder="upload images" 
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
                required
              />
              <button type="submit">add to list 💝</button>
            </form>
          </div>
        )}
 
        <div className="grid">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <div className="item-image">
                <img src={item.image} alt={item.name} onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1549887534-7e9a0b637e3a?w=400&h=300&fit=crop'} />
                {viewMode === 'admin' && (
                  <button 
                    className="delete-btn"
                    onClick={() => deleteItem(item.id)}
                  >
                    ×
                  </button>
                )}
              </div>
              <div className="item-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                {item.claimed ? (
                  <div className="claimed-btn">✓ i'm getting this</div>
                ) : (
                  <button 
                    className="item-btn"
                    onClick={() => toggleItemClaimed(item.id)}
                  >
                    💝 i'm getting this
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
 
        <div className="stats">
          <div style={{ position: 'absolute', top: '-12px', left: '30px', fontSize: '28px' }} className="floating">🎀</div>
          <p>{items.length} things i want • {items.filter(i => i.claimed).length} claimed</p>
        </div>
      </div>
    </div>
  );
}
 
