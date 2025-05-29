import React from 'react';
import LANDiagram from '../components/LANDiagram';

const LAN = () => {
  return (
    <div>
      <div className="max-w-xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-left">
          Understanding LAN (Local Area Network)
        </h2>
        <div className="space-y-2">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              What is a LAN?
            </div>
            <div className="collapse-content">
              <p>
                A LAN (Local Area Network) is a network that connects computers
                and devices within a limited area like a home, school, or office
                building.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Why use a LAN?
            </div>
            <div className="collapse-content">
              <p>
                LANs allow devices to share resources like files, printers, and
                internet connections efficiently and securely within a local
                environment.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              How does a LAN work?
            </div>
            <div className="collapse-content">
              <p>
                LANs use hardware like routers, switches, and Ethernet cables or
                Wi-Fi to connect devices. Data is transmitted in packets, and
                the network manages how those packets are sent and received
                between devices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 style={{ textAlign: 'center' }}>LAN Network Diagram</h1>
      <LANDiagram />
    </div>
  );
};

export default LAN;
