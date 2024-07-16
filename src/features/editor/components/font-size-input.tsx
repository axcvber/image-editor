import { Minus, Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface FontSizeInputProps {
  value: number
  onChange: (value: number) => void
}

export const FontSizeInput = ({ value, onChange }: FontSizeInputProps) => {
  const increment = () => onChange(value < 500 ? value + 1 : value)
  const decrement = () => onChange(value > 1 ? value - 1 : value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    if (value >= 1 && value <= 500) {
      onChange(value)
    }
  }

  return (
    <div className='flex items-center'>
      <Button onClick={decrement} variant='outline' className='p-2 rounded-r-none border-r-0' size='icon'>
        <Minus className='size-4' />
      </Button>
      <Input
        type='number'
        onChange={handleChange}
        value={value.toString()}
        className='w-[50px] h-9 focus-visible:ring-offset-0 focus-visible:ring-0 rounded-none'
      />
      <Button onClick={increment} variant='outline' className='p-2 rounded-l-none border-l-0' size='icon'>
        <Plus className='size-4' />
      </Button>
    </div>
  )
}
