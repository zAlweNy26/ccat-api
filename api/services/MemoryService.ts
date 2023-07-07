/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionsList } from '../models/CollectionsList';
import type { DeleteResponse } from '../models/DeleteResponse';
import type { MemoryRecall } from '../models/MemoryRecall';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MemoryService {

    constructor(private readonly httpRequest: BaseHttpRequest) {}

    /**
     * Delete Element In Memory
     * Delete specific element in memory.
     * @param memoryId 
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public deleteElementInMemory(
memoryId: string,
): CancelablePromise<DeleteResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/memory/point/{memory_id}/',
            path: {
                'memory_id': memoryId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Recall Memories From Text
     * Search k memories similar to given text.
     * @param text Find memories similar to this text.
     * @param k How many memories to return.
     * @returns MemoryRecall Successful Response
     * @throws ApiError
     */
    public recallMemoriesFromText(
text: string,
k: number = 100,
): CancelablePromise<MemoryRecall> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/memory/recall/',
            query: {
                'text': text,
                'k': k,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Collections
     * @returns CollectionsList Successful Response
     * @throws ApiError
     */
    public getCollections(): CancelablePromise<CollectionsList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/memory/collections/',
        });
    }

    /**
     * Wipe Single Collection
     * Delete and recreate a collection
     * @param collectionId 
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public wipeSingleCollection(
collectionId: string,
): CancelablePromise<DeleteResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/memory/collections/{collection_id}',
            path: {
                'collection_id': collectionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Wipe Collections
     * Delete and create all collections
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public wipeCollections(): CancelablePromise<DeleteResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/memory/wipe-collections/',
        });
    }

    /**
     * Wipe Conversation History
     * Delete conversation history from working memory
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public wipeConversationHistory(): CancelablePromise<DeleteResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/memory/working-memory/conversation-history/',
        });
    }

}
