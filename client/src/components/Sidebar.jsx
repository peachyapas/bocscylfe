import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar2.scss';

const Sidebar = () => {
    const [expandedSections, setExpandedSections] = useState([]);
    const location = useLocation();

    const navStructure = [
        {
            name: 'home',
            path: '/',
            subitems: [
                { name: 'All', path: '/' },
                { name: 'Authors', path: '/authors' },
            ],
            icon: 'bi-house-door-fill',
        },
        {
            name: 'books',
            path: '/books',
            icon: 'bi-card-checklist',
        },
    ];
    
    const isActive = (path) => location.pathname === path;

    const toggleSection = (section) => {
        setExpandedSections(prev => {
            const newExpandedSections = prev.includes(section) 
                ? prev.filter(s => s !== section) 
                : [...prev, section];
            
            localStorage.setItem('expandedSections', JSON.stringify(newExpandedSections));

            return newExpandedSections;
        });
    };

    useEffect(() => {
        const activeSections = [];

        const storedExpandedSections = JSON.parse(localStorage.getItem('expandedSections')) || [];

        navStructure.forEach(section => {
            if (
                section.subitems && 
                section.subitems.some(subitem => isActive(subitem.path)) ||
                isActive(section.path)
            ) {
                activeSections.push(section.name);
            }
        });

        // Set expanded sections, either from stored value or based on active path
        setExpandedSections(prev => [...new Set([...prev, ...storedExpandedSections, ...activeSections])]);
    }, [location.pathname]);

    return (
        <div className="sidebar">
            <Nav className="flex-column">

                {/* Render each section */}
                {navStructure.map(section => (
                    <Nav.Item key={section.name}>
                        {/* Check if the section has subitems */}
                        {section.subitems ? (
                            <>
                                <Nav.Link onClick={() => toggleSection(section.name)} className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <i className={`bi ${section.icon}`}></i> {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                                    </div>
                                    <i className={`bi ${expandedSections.includes(section.name) ? 'bi-chevron-down' : 'bi-chevron-right'} dropdown-arrow`}></i>
                                </Nav.Link>

                                {/* Render subitems if the section is expanded */}
                                {expandedSections.includes(section.name) && (
                                    <div className="submenu">
                                        {section.subitems.map(subitem => (
                                            <Nav.Link
                                                as={Link}
                                                to={subitem.path}
                                                className={`subitem ${isActive(subitem.path) ? 'active' : ''}`}
                                                key={subitem.path}
                                            >
                                                {subitem.name}
                                            </Nav.Link>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            // Render standalone Nav.Link for sections without subitems
                            <Nav.Link as={Link} to={section.path} className={`${isActive(section.path) ? 'active' : ''}`}>
                                <i className={`bi ${section.icon}`}></i> {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                            </Nav.Link>
                        )}
                    </Nav.Item>
                ))}
            </Nav>
        </div>
    );
};

export default Sidebar;
