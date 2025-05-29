import React, { useCallback } from 'react';
import {
  Handle,
  Position,
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const ImageNode = ({ data }) => {
  return (
    <div style={{ padding: 10, position: 'relative' }}>
      <img
        src={data.imgSrc}
        alt={data.alt}
        width={data.width}
        style={{ borderRadius: 8 }}
      />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

const nodeTypes = {
  imageNode: ImageNode,
};

const initialNodes = [
  {
    id: 'internet',
    type: 'imageNode',
    position: { x: 950, y: 350 },
    data: { imgSrc: '/images/internet.jpg', alt: 'Switch', width: 100 },
  },
  {
    id: 'switch',
    type: 'imageNode',
    position: { x: 250, y: 200 },
    data: { imgSrc: '/images/switch.png', alt: 'Switch', width: 100 },
  },
  {
    id: 'apd',
    type: 'imageNode',
    position: { x: 100, y: 50 },
    data: { imgSrc: '/images/apd.jpg', alt: 'APD', width: 100 },
  },
  {
    id: 'laptop',
    type: 'imageNode',
    position: { x: 400, y: 50 },
    data: { imgSrc: '/images/laptop.jpg', alt: 'Laptop', width: 100 },
  },
  {
    id: 'pc',
    type: 'imageNode',
    position: { x: 50, y: 300 },
    data: { imgSrc: '/images/pc.jpg', alt: 'PC', width: 100 },
  },
  {
    id: 'cam',
    type: 'imageNode',
    position: { x: 250, y: 400 },
    data: { imgSrc: '/images/cam.jpg', alt: 'Cam', width: 100 },
  },
  {
    id: 'watch',
    type: 'imageNode',
    position: { x: -100, y: -100 },
    data: { imgSrc: '/images/watch.jpg', alt: 'Watch', width: 100 },
  },
  {
    id: 'mobile',
    type: 'imageNode',
    position: { x: 100, y: -150 },
    data: { imgSrc: '/images/mobile.jpg', alt: 'Mobile', width: 100 },
  },
];

const initialEdges = [
  { id: 'e0', source: 'switch', target: 'internet', animated: true },
  { id: 'e1', source: 'apd', target: 'switch', animated: true },
  { id: 'e2', source: 'pc', target: 'switch', animated: true },
  { id: 'e3', source: 'laptop', target: 'switch', animated: true },
  { id: 'e4', source: 'cam', target: 'switch', animated: true },
  { id: 'e5', source: 'watch', target: 'apd', animated: true },
  { id: 'e6', source: 'mobile', target: 'apd', animated: true },
];

// ✅ Main App
export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '90vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
