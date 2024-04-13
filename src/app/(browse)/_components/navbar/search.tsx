'use client'

import React, { useState } from 'react'

import { useRouter } from 'next/navigation'

import { SearchIcon, X } from 'lucide-react'
import qs from 'query-string'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Search() {
  const router = useRouter()
  const [value, setValue] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value) return
    const url = qs.stringifyUrl(
      {
        url: '/',
        query: {
          term: value,
        },
      },
      {
        skipEmptyString: true,
      },
    )
    router.push(url)
  }

  const onClear = () => {
    setValue('')
    const url = qs.stringifyUrl(
      {
        url: '/',
      },
      {
        skipEmptyString: true,
      },
    )
    router.push(url)
  }
  return (
    <form
      onSubmit={onSubmit}
      className="relative flex w-full items-center lg:w-[400px]"
    >
      <Input
        placeholder="Search"
        className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></Input>
      {value && (
        <X
          className="absolute right-14 top-2.5 h-5 w-5 cursor-pointer text-muted-foreground transition hover:opacity-75"
          onClick={onClear}
        />
      )}
      <Button
        type="submit"
        size="sm"
        variant="secondary"
        className="rounded-l-none"
      >
        <SearchIcon className="h-5 w-5 text-muted-foreground"></SearchIcon>
      </Button>
    </form>
  )
}
