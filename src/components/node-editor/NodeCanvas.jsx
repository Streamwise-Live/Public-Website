import { useState, useRef, useCallback, useEffect } from 'react'
import NodeCard from './NodeCard'
import ConnectionLine from './ConnectionLine'
import { nodes, connections, nodePositions, NODE_WIDTH, NODE_HEIGHT } from '../../data/nodes'

export default function NodeCanvas() {
  const containerRef = useRef(null)
  const [offsets, setOffsets] = useState({})
  const [dragging, setDragging] = useState(null)
  const dragStart = useRef({ x: 0, y: 0 })
  const [containerSize, setContainerSize] = useState({ w: 800, h: 400 })

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setContainerSize({ w: rect.width, h: rect.height })
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const getNodePixelPos = useCallback(
    (id) => {
      const base = nodePositions[id]
      const off = offsets[id] || { x: 0, y: 0 }
      return {
        x: (base.x / 100) * containerSize.w + off.x,
        y: (base.y / 100) * containerSize.h + off.y,
      }
    },
    [containerSize, offsets]
  )

  const handlePointerDown = useCallback((e, nodeId) => {
    e.preventDefault()
    setDragging(nodeId)
    dragStart.current = { x: e.clientX, y: e.clientY }
    e.currentTarget.setPointerCapture(e.pointerId)
  }, [])

  const handlePointerMove = useCallback(
    (e) => {
      if (!dragging) return
      const dx = e.clientX - dragStart.current.x
      const dy = e.clientY - dragStart.current.y
      dragStart.current = { x: e.clientX, y: e.clientY }
      setOffsets((prev) => ({
        ...prev,
        [dragging]: {
          x: (prev[dragging]?.x || 0) + dx,
          y: (prev[dragging]?.y || 0) + dy,
        },
      }))
    },
    [dragging]
  )

  const handlePointerUp = useCallback(() => {
    setDragging(null)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[350px]"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* SVG connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" overflow="visible">
        {connections.map((conn) => {
          const from = getNodePixelPos(conn.from)
          const to = getNodePixelPos(conn.to)
          return (
            <ConnectionLine
              key={`${conn.from}-${conn.to}`}
              id={`${conn.from}-${conn.to}`}
              x1={from.x + NODE_WIDTH}
              y1={from.y + NODE_HEIGHT / 2}
              x2={to.x}
              y2={to.y + NODE_HEIGHT / 2}
            />
          )
        })}
      </svg>

      {/* Node cards */}
      {nodes.map((node) => {
        const pos = getNodePixelPos(node.id)
        return (
          <NodeCard
            key={node.id}
            node={node}
            style={{
              left: pos.x,
              top: pos.y,
            }}
            onPointerDown={(e) => handlePointerDown(e, node.id)}
          />
        )
      })}
    </div>
  )
}
