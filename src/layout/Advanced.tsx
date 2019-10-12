import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Stack,
  Text
} from '@chakra-ui/core';
import StreamDetails from './StreamDetails';
import ApiLookup from './ApiLookup';
import StreamProcessor from './StreamProcessor';
import PlayerOptions from './PlayerOptions';
import Header, { Level } from '../components/Header';

const SectionHeader: React.FC<{ header: string; isRequired?: boolean }> = ({ header, isRequired }) => (
  <AccordionHeader backgroundColor="gray.100">
    <Header level={Level.H2} flex="1">
      {header}
      {!isRequired && (
        <Text as="em" fontStyle="normal" color="gray.500" fontWeight="normal" ml="4">
          {' '}
          optional
        </Text>
      )}
    </Header>
    <AccordionIcon />
  </AccordionHeader>
);

const Advanced: React.FC = () => (
  <Stack>
    <Accordion defaultIndex={[1]} allowMultiple>
      <AccordionItem>
        <SectionHeader header="CMS/API stream lookup" />
        <AccordionPanel ml={2} backgroundColor="White">
          <ApiLookup />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <SectionHeader header="Stream details" isRequired />
        <AccordionPanel ml={2} backgroundColor="White">
          <StreamDetails />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <SectionHeader header="Stream processor" />
        <AccordionPanel ml={2} backgroundColor="White">
          <StreamProcessor />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <SectionHeader header="Player options" />
        <AccordionPanel ml={2} backgroundColor="White">
          <PlayerOptions />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    <Flex justify="center" py={4}>
      <Button variantColor="green">Play</Button>
    </Flex>
  </Stack>
);

export default Advanced;