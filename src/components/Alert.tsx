'use client'
import Swal from 'sweetalert2'

export function showSuccess(title: string) { Swal.fire({ icon: 'success', title }) }
export function showInfo(title: string, text?: string) { Swal.fire({ title, text, timer:2000, showConfirmButton: false }) }
export function showError(title: string, text?: string) { Swal.fire({ icon: 'error', title, text }) }
