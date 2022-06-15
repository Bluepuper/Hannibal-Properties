import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Dashboard from '../../layouts/DashboardLayout'

const DashboardPage: NextPage = () => {
	const router = useRouter()

	return <Dashboard></Dashboard>


} 

export default DashboardPage
