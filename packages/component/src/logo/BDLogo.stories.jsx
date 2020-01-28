import React from 'react'
import { BDLogo } from './BDLogo'

export default { title: 'Logo' }

export const basic = () => <BDLogo />

export const dark = () => <BDLogo dark />

export const withTail = () => <BDLogo dark tail />

export const withSkull = () => <BDLogo dark skull />
